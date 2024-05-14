import { useScheduler } from '~/src/runtime/server/services';
import say from '~~/server/app/services/say';
const config = useRuntimeConfig();

export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const scheduler = useScheduler();

  // Tasks
  scheduler
    .run(() => {
      say('Jobs Run at 00:01 AM 🌍');
      importData('OverViewNetworkMetrics');
      importData('OverviewNetworkUptime');
      importData('OverviewStakedWeight');
    })
    .dailyAt(0, 1);

  // Define a function to fetch your API data
  const importData = async (endpoint: string) => {
    console.log('importData called-->');
    const response = await fetch(`${config.public.app_base_url}/import/${endpoint}`);
    if (response.ok) {
      say(`${endpoint} job is COMPLETED 😀!`);
    } else {
      say(`${endpoint} job FAILED!`);
    }
  };
}
