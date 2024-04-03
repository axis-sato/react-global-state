// import aspida, { type FetchConfig } from "@aspida/fetch";
// import api from "../api/api/$api";
// import useAspidaSWR from "@aspida/swr";
import { useGetUserByName } from "../api/orval/openAPIPetstore";

// const fetchConfig = {
//   credentials: "include",
//   baseURL: "http://127.0.0.1:4010",
//   throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
// } satisfies FetchConfig;

// see: https://zenn.dev/yumemi_inc/articles/aspida-fetch-options-ab2d536d287bd7
// const client = api(aspida((...args) => fetch(...args), fetchConfig));

type UserProps = {
  enabled: boolean;
};

export default function User({ enabled }: UserProps) {
  // const { data: user } = useAspidaSWR(client.user._username("foo"), {
  //   key: enabled ? undefined : null,
  // });

  const { data: user, isLoading } = useGetUserByName("foo", {
    swr: { enabled },
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>swr user: {JSON.stringify(user)}</div>
    </div>
  );
}
