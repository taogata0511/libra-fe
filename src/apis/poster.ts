import { Arguments } from "swr";

export const poster = async (url: string, { arg }: { arg: Arguments }) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};
