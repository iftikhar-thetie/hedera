<template>
  <nav
    :class="[
      'flex space-x-2 flex-row h-10',
      'text-sm font-medium text-neutral-400 justify-center md:justify-start items-center select-none'
    ]"
    aria-label="Pagination Navigation"
  >
    <div
      class="flex rounded h-[22px] p-1 items-center bg-neutral-800 cursor-pointer hover:bg-neutral-700 hover:text-blue-400"
      tabindex="0"
      aria-label="Goto Previous Page"
      @click="decrement"
      @keydown.space="decrementKey"
      @keydown.enter="decrementKey"
    >
      <ArrowLeftIcon class="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    </div>
    <ul role="toolbar" class="flex flex-row space-x-px text-center">
      <li
        v-for="(i, index) of paginationRange"
        :key="index"
        :tabindex="i !== '...' ? '0' : ''"
        :aria-current="i === paginateValue ? 'true' : 'false'"
        :class="[
          i === paginateValue ? ' bg-neutral-800 text-blue-400' : '',
          i !== '...' ? 'cursor-pointer hover:text-neutral-100 hover:bg-neutral-800/50' : '',
          'w-8 py-px rounded',
          'duration-100'
        ]"
        :aria-label="i !== '...' ? `Goto Page ${i}` : ''"
        @click="($event: MouseEvent) => setVal($event, i)"
        @keydown.space="($event: KeyboardEvent) => setValKey($event, i)"
        @keydown.enter="($event: KeyboardEvent) => setValKey($event, i)"
      >
        {{ i }}
      </li>
    </ul>
    <div
      class="flex rounded h-[22px] p-1 items-center bg-neutral-800 cursor-pointer hover:bg-neutral-700 hover:text-blue-400"
      tabindex="0"
      aria-label="Goto Next Page"
      @click="increment"
      @keydown.space="incrementKey"
      @keydown.enter="incrementKey"
    >
      <ArrowRightIcon class="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  siblingCount: {
    type: Number,
    default: 1
  },
  vertical: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const paginateValue = computed({
  get: () => props.modelValue,
  set: value => {
    if (value > 0 && value <= props.pages) emit('update:modelValue', value);
  }
});

const decrement = (e: MouseEvent) => {
  e.preventDefault();
  paginateValue.value--;
  return e;
};

const decrementKey = (e: KeyboardEvent) => {
  e.preventDefault();
  paginateValue.value--;
  return e;
};

const increment = (e: MouseEvent) => {
  e.preventDefault();
  paginateValue.value++;
  return e;
};

const incrementKey = (e: KeyboardEvent) => {
  e.preventDefault();
  paginateValue.value++;
  return e;
};

const setVal = (e: MouseEvent, val: string | number) => {
  e.preventDefault();
  paginateValue.value = Number(val);
  return e;
};

const setValKey = (e: KeyboardEvent, val: string | number) => {
  e.preventDefault();
  paginateValue.value = Number(val);
  return e;
};

const paginationRange = computed(() => {
  const DOTS = '...';
  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = props.siblingCount + 5;

  /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
  if (totalPageNumbers >= props.pages) {
    return [...Array(props.pages).keys()].map(page => page + 1);
  }

  /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
  const leftSiblingIndex = Math.max(props.modelValue - props.siblingCount, 1);
  const rightSiblingIndex = Math.min(props.modelValue + props.siblingCount, props.pages);

  /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < props.pages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = props.pages;

  /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * props.siblingCount;
    let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);

    return [...leftRange, DOTS, props.pages];
  }

  /*
    	Case 3: No right dots to show, but left dots to be shown
    */
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * props.siblingCount;
    let rightRange = Array.from({ length: rightItemCount }, (_, i) => i + props.pages - rightItemCount + 1);

    return [firstPageIndex, DOTS, ...rightRange];
  }

  /*
    	Case 4: Both left and right dots to be shown
    */
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (x, i) => i + leftSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
});
</script>
