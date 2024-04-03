/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  post: {
    status: 200;
    /** successful operation */
    resBody: Types.Pet;
    /** Pet object that needs to be added to the store */
    reqBody: Types.PetBody;
  };

  put: {
    status: 200;
    /** successful operation */
    resBody: Types.Pet;
    /** Pet object that needs to be added to the store */
    reqBody: Types.PetBody;
  };
};
