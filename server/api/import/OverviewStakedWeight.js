// OverviewStakedWeight
const config = useRuntimeConfig();
export default defineEventHandler(async event => {
  const redis = useStorage('redis');
  const response = await $fetch(`${config.public.app_base_url}/onchain/dashboards/hedera/validators`, {
    headers: {
      'x-api-key': config.public.secret
    }
  });
  if (response?.data) {
    redis.setItem(`Overview:StakedWeight`, response.data);
  }

  return 'Hurry! Overview Staked Weight Import Completed.';
});
