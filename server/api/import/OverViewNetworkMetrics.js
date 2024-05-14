// OverViewNetworkMetrics
const config = useRuntimeConfig();
export default defineEventHandler(async event => {
  const redis = useStorage('redis');
  const response = await $fetch(`${config.public.app_base_url}/onchain/dashboards/hedera/network_stats`, {
    headers: {
      'x-api-key': config.public.secret
    }
  });
  if (response?.data) {
    redis.setItem(`Overview:NetworkMetrics`, response.data);
  }

  return 'Hurry! Overview Network Metrics Import Completed.';
});
