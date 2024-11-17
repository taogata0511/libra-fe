export const fetcher = async <T>(key: string) => {
  return fetch(key)
    .then((res) => {
      return res.json() as Promise<T>;
    })
    .catch((error) => {
      throw error;
    });
};
