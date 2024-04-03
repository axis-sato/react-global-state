import { createApiClient } from "../api/client";
import { ZodiosHooks } from "@zodios/react";

type UserProps = {
  enabled: boolean;
};

const api = createApiClient("http://127.0.0.1:4010");
const zodiosHooks = new ZodiosHooks("api", api);

export default function User({ enabled }: UserProps) {
  const { data: user } = zodiosHooks.useGetUserByName({
    params: { username: "Bret" },
    enabled,
  });

  return (
    <div>
      <div>user: {JSON.stringify(user)}</div>
    </div>
  );
}
