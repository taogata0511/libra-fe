export const fetcher = async <T>(key: string) => {
  return fetch(key).then((res) => res.json() as Promise<T | null>);
};
