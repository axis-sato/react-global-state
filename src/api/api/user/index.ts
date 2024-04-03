/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** This can only be done by the logged in user. */
  post: {
    status: 200;
    /** successful operation */
    resBody: Types.User;
    /** Created user object */
    reqBody: Types.User;
  };
};
