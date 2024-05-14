export default defineEventHandler(async event => {
  const id = event.context.params.id;
  console.log('Request Name:', id);
  const redis = useStorage('redis');
  const data = redis.getItem(id);
  return data;
});
