/* eslint-disable */
export type Methods = {
  get: {
    query: {
      /** The user name for login */
      username: string;
      /** The password for login in clear text */
      password: string;
    };

    status: 200;
    /** successful operation */
    resBody: string;

    resHeaders: {
      /** Cookie authentication key for use with the `api_key` apiKey authentication. */
      "Set-Cookie": string;
      /** calls per hour allowed by the user */
      "X-Rate-Limit": number;
      /** date in UTC when token expires */
      "X-Expires-After": string;
    };
  };
};
