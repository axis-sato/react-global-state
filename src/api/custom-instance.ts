const baseURL = "http://127.0.0.1:4010"; // use your own URL here or environment variable

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  responseType?: string;
  headers?: HeadersInit;
}): Promise<T> => {
  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method,
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  return response.json();
};

export default customInstance;
