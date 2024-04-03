/* eslint-disable */
/** An order for a pets from the pet store */
export type Order = {
  id?: number | undefined;
  petId?: number | undefined;
  quantity?: number | undefined;
  shipDate?: string | undefined;
  /** Order Status */
  status?: "placed" | "approved" | "delivered" | undefined;
  complete?: boolean | undefined;
};

/** A category for a pet */
export type Category = {
  id?: number | undefined;
  name?: string | undefined;
};

/** A User who is purchasing from the pet store */
export type User = {
  id?: number | undefined;
  username?: string | undefined;
};

/** A tag for a pet */
export type Pet = {
  id?: number | undefined;
  name?: string | undefined;
};

/** A tag for a pet */
export type Tag = {
  id?: number | undefined;
  name?: string | undefined;
};

/** Describes the result of uploading an image resource */
export type ApiResponse = {
  code?: number | undefined;
  type?: string | undefined;
  message?: string | undefined;
};

export type UserArray = User[];

export type PetBody = Pet;
