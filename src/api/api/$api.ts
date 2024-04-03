import type { AspidaClient, BasicHeaders } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods_oom0a7 } from "./pet";
import type { Methods as Methods_28jsbg } from "./pet/_petId@number";
import type { Methods as Methods_1k0b4d } from "./pet/_petId@number/uploadImage";
import type { Methods as Methods_y27ayw } from "./pet/findByStatus";
import type { Methods as Methods_gp223s } from "./store/inventory";
import type { Methods as Methods_fgwm1g } from "./store/order";
import type { Methods as Methods_1q4hsko } from "./store/order/_orderId@number";
import type { Methods as Methods_tli9od } from "./user";
import type { Methods as Methods_1e9ibho } from "./user/_username@string";
import type { Methods as Methods_c09e5j } from "./user/createWithArray";
import type { Methods as Methods_1ug4t2i } from "./user/createWithList";
import type { Methods as Methods_1904ovn } from "./user/login";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://petstore.swagger.io/v2" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/pet";
  const PATH1 = "/uploadImage";
  const PATH2 = "/pet/findByStatus";
  const PATH3 = "/store/inventory";
  const PATH4 = "/store/order";
  const PATH5 = "/user";
  const PATH6 = "/user/createWithArray";
  const PATH7 = "/user/createWithList";
  const PATH8 = "/user/login";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    pet: {
      _petId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          uploadImage: {
            /**
             * @returns successful operation
             */
            post: (option: {
              body: Methods_1k0b4d["post"]["reqBody"];
              config?: T | undefined;
            }) =>
              fetch<
                Methods_1k0b4d["post"]["resBody"],
                BasicHeaders,
                Methods_1k0b4d["post"]["status"]
              >(prefix, `${prefix1}${PATH1}`, POST, option, "FormData").json(),
            /**
             * @returns successful operation
             */
            $post: (option: {
              body: Methods_1k0b4d["post"]["reqBody"];
              config?: T | undefined;
            }) =>
              fetch<
                Methods_1k0b4d["post"]["resBody"],
                BasicHeaders,
                Methods_1k0b4d["post"]["status"]
              >(prefix, `${prefix1}${PATH1}`, POST, option, "FormData")
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
          /**
           * Returns a single pet
           * @returns successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_28jsbg["get"]["resBody"],
              BasicHeaders,
              Methods_28jsbg["get"]["status"]
            >(prefix, prefix1, GET, option).json(),
          /**
           * Returns a single pet
           * @returns successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_28jsbg["get"]["resBody"],
              BasicHeaders,
              Methods_28jsbg["get"]["status"]
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          post: (option: {
            body: Methods_28jsbg["post"]["reqBody"];
            config?: T | undefined;
          }) => fetch(prefix, prefix1, POST, option, "URLSearchParams").send(),
          $post: (option: {
            body: Methods_28jsbg["post"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch(prefix, prefix1, POST, option, "URLSearchParams")
              .send()
              .then((r) => r.body),
          delete: (
            option?:
              | {
                  headers?: Methods_28jsbg["delete"]["reqHeaders"] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) => fetch(prefix, prefix1, DELETE, option).send(),
          $delete: (
            option?:
              | {
                  headers?: Methods_28jsbg["delete"]["reqHeaders"] | undefined;
                  config?: T | undefined;
                }
              | undefined,
          ) =>
            fetch(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      findByStatus: {
        /**
         * Multiple status values can be provided with comma separated strings
         * @returns successful operation
         */
        get: (option: {
          query: Methods_y27ayw["get"]["query"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_y27ayw["get"]["resBody"],
            BasicHeaders,
            Methods_y27ayw["get"]["status"]
          >(prefix, PATH2, GET, option).json(),
        /**
         * Multiple status values can be provided with comma separated strings
         * @returns successful operation
         */
        $get: (option: {
          query: Methods_y27ayw["get"]["query"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_y27ayw["get"]["resBody"],
            BasicHeaders,
            Methods_y27ayw["get"]["status"]
          >(prefix, PATH2, GET, option)
            .json()
            .then((r) => r.body),
        $path: (
          option?:
            | {
                method?: "get" | undefined;
                query: Methods_y27ayw["get"]["query"];
              }
            | undefined,
        ) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ""}`,
      },
      /**
       * @param option.body - Pet object that needs to be added to the store
       * @returns successful operation
       */
      post: (option: {
        body: Methods_oom0a7["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_oom0a7["post"]["resBody"],
          BasicHeaders,
          Methods_oom0a7["post"]["status"]
        >(prefix, PATH0, POST, option).json(),
      /**
       * @param option.body - Pet object that needs to be added to the store
       * @returns successful operation
       */
      $post: (option: {
        body: Methods_oom0a7["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_oom0a7["post"]["resBody"],
          BasicHeaders,
          Methods_oom0a7["post"]["status"]
        >(prefix, PATH0, POST, option)
          .json()
          .then((r) => r.body),
      /**
       * @param option.body - Pet object that needs to be added to the store
       * @returns successful operation
       */
      put: (option: {
        body: Methods_oom0a7["put"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_oom0a7["put"]["resBody"],
          BasicHeaders,
          Methods_oom0a7["put"]["status"]
        >(prefix, PATH0, PUT, option).json(),
      /**
       * @param option.body - Pet object that needs to be added to the store
       * @returns successful operation
       */
      $put: (option: {
        body: Methods_oom0a7["put"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_oom0a7["put"]["resBody"],
          BasicHeaders,
          Methods_oom0a7["put"]["status"]
        >(prefix, PATH0, PUT, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    store: {
      inventory: {
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods_gp223s["get"]["resBody"],
            BasicHeaders,
            Methods_gp223s["get"]["status"]
          >(prefix, PATH3, GET, option).json(),
        /**
         * Returns a map of status codes to quantities
         * @returns successful operation
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods_gp223s["get"]["resBody"],
            BasicHeaders,
            Methods_gp223s["get"]["status"]
          >(prefix, PATH3, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      order: {
        _orderId: (val2: number) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            /**
             * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
             * @returns successful operation
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods_1q4hsko["get"]["resBody"],
                BasicHeaders,
                Methods_1q4hsko["get"]["status"]
              >(prefix, prefix2, GET, option).json(),
            /**
             * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
             * @returns successful operation
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods_1q4hsko["get"]["resBody"],
                BasicHeaders,
                Methods_1q4hsko["get"]["status"]
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            /**
             * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option).send(),
            /**
             * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        post: (option: {
          body: Methods_fgwm1g["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_fgwm1g["post"]["resBody"],
            BasicHeaders,
            Methods_fgwm1g["post"]["status"]
          >(prefix, PATH4, POST, option).json(),
        /**
         * @param option.body - order placed for purchasing the pet
         * @returns successful operation
         */
        $post: (option: {
          body: Methods_fgwm1g["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_fgwm1g["post"]["resBody"],
            BasicHeaders,
            Methods_fgwm1g["post"]["status"]
          >(prefix, PATH4, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
    },
    user: {
      _username: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * @returns successful operation
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1e9ibho["get"]["resBody"],
              BasicHeaders,
              Methods_1e9ibho["get"]["status"]
            >(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful operation
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1e9ibho["get"]["resBody"],
              BasicHeaders,
              Methods_1e9ibho["get"]["status"]
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          put: (option: {
            body: Methods_1e9ibho["put"]["reqBody"];
            config?: T | undefined;
          }) => fetch(prefix, prefix1, PUT, option).send(),
          /**
           * This can only be done by the logged in user.
           * @param option.body - Updated user object
           */
          $put: (option: {
            body: Methods_1e9ibho["put"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          /**
           * This can only be done by the logged in user.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          /**
           * This can only be done by the logged in user.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      createWithArray: {
        /**
         * @param option.body - List of user object
         */
        post: (option: {
          body: Methods_c09e5j["post"]["reqBody"];
          config?: T | undefined;
        }) => fetch(prefix, PATH6, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: {
          body: Methods_c09e5j["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch(prefix, PATH6, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      createWithList: {
        /**
         * @param option.body - List of user object
         */
        post: (option: {
          body: Methods_1ug4t2i["post"]["reqBody"];
          config?: T | undefined;
        }) => fetch(prefix, PATH7, POST, option).send(),
        /**
         * @param option.body - List of user object
         */
        $post: (option: {
          body: Methods_1ug4t2i["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch(prefix, PATH7, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
      login: {
        /**
         * @returns successful operation
         */
        get: (option: {
          query: Methods_1904ovn["get"]["query"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1904ovn["get"]["resBody"],
            Methods_1904ovn["get"]["resHeaders"],
            Methods_1904ovn["get"]["status"]
          >(prefix, PATH8, GET, option).text(),
        /**
         * @returns successful operation
         */
        $get: (option: {
          query: Methods_1904ovn["get"]["query"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods_1904ovn["get"]["resBody"],
            Methods_1904ovn["get"]["resHeaders"],
            Methods_1904ovn["get"]["status"]
          >(prefix, PATH8, GET, option)
            .text()
            .then((r) => r.body),
        $path: (
          option?:
            | {
                method?: "get" | undefined;
                query: Methods_1904ovn["get"]["query"];
              }
            | undefined,
        ) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ""}`,
      },
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       * @returns successful operation
       */
      post: (option: {
        body: Methods_tli9od["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_tli9od["post"]["resBody"],
          BasicHeaders,
          Methods_tli9od["post"]["status"]
        >(prefix, PATH5, POST, option).json(),
      /**
       * This can only be done by the logged in user.
       * @param option.body - Created user object
       * @returns successful operation
       */
      $post: (option: {
        body: Methods_tli9od["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods_tli9od["post"]["resBody"],
          BasicHeaders,
          Methods_tli9od["post"]["status"]
        >(prefix, PATH5, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
