// OverviewNetworkUptime
const config = useRuntimeConfig();
export default defineEventHandler(async event => {
  const redis = useStorage('redis');
  const response = await $fetch(`${config.public.app_base_url}/onchain/dashboards/hedera/uptime`, {
    headers: {
      'x-api-key': config.public.secret
    }
  });
  if (response?.data?.length > 0) {
    redis.setItem(`Overview:NetworkUptime`, response.data);
  }

  return 'Hurry! Overview Network Uptime Import Completed.';
});
