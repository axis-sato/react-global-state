/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.0
 */
import useSwr from "swr";
import type { Arguments, Key, SWRConfiguration } from "swr";
import useSWRMutation from "swr/mutation";
import type { SWRMutationConfiguration } from "swr/mutation";
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  LoginUserParams,
  Order,
  Pet,
  PetBodyBody,
  UpdatePetWithFormBody,
  UploadFileBody,
  User,
  UserArrayBody,
} from "../../model";
import customInstance from "../custom-instance";

/**
 * @summary Add a new pet to the store
 */
export const addPet = (petBodyBody: PetBodyBody) => {
  return customInstance<Pet>({
    url: `/pet`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: petBodyBody,
  });
};

export const getAddPetMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<Pet> => {
    return addPet(arg as PetBodyBody);
  };
};
export const getAddPetMutationKey = () => `/pet` as const;

export type AddPetMutationResult = NonNullable<
  Awaited<ReturnType<typeof addPet>>
>;
export type AddPetMutationError = void;

/**
 * @summary Add a new pet to the store
 */
export const useAddPet = <TError = void>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof addPet>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof addPet>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getAddPetMutationKey();
  const swrFn = getAddPetMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Update an existing pet
 */
export const updatePet = (petBodyBody: PetBodyBody) => {
  return customInstance<Pet>({
    url: `/pet`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: petBodyBody,
  });
};

export const getUpdatePetMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<Pet> => {
    return updatePet(arg as PetBodyBody);
  };
};
export const getUpdatePetMutationKey = () => `/pet` as const;

export type UpdatePetMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePet>>
>;
export type UpdatePetMutationError = void;

/**
 * @summary Update an existing pet
 */
export const useUpdatePet = <TError = void>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof updatePet>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof updatePet>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getUpdatePetMutationKey();
  const swrFn = getUpdatePetMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (params: FindPetsByStatusParams) => {
  return customInstance<Pet[]>({
    url: `/pet/findByStatus`,
    method: "GET",
    params,
  });
};

export const getFindPetsByStatusKey = (params: FindPetsByStatusParams) =>
  [`/pet/findByStatus`, ...(params ? [params] : [])] as const;

export type FindPetsByStatusQueryResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByStatus>>
>;
export type FindPetsByStatusQueryError = void;

/**
 * @summary Finds Pets by status
 */
export const useFindPetsByStatus = <TError = void>(
  params: FindPetsByStatusParams,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof findPetsByStatus>>,
      TError
    > & { swrKey?: Key; enabled?: boolean };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getFindPetsByStatusKey(params) : null));
  const swrFn = () => findPetsByStatus(params);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @deprecated
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (params: FindPetsByTagsParams) => {
  return customInstance<Pet[]>({
    url: `/pet/findByTags`,
    method: "GET",
    params,
  });
};

export const getFindPetsByTagsKey = (params: FindPetsByTagsParams) =>
  [`/pet/findByTags`, ...(params ? [params] : [])] as const;

export type FindPetsByTagsQueryResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByTags>>
>;
export type FindPetsByTagsQueryError = void;

/**
 * @deprecated
 * @summary Finds Pets by tags
 */
export const useFindPetsByTags = <TError = void>(
  params: FindPetsByTagsParams,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof findPetsByTags>>,
      TError
    > & { swrKey?: Key; enabled?: boolean };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getFindPetsByTagsKey(params) : null));
  const swrFn = () => findPetsByTags(params);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (petId: number) => {
  return customInstance<Pet>({ url: `/pet/${petId}`, method: "GET" });
};

export const getGetPetByIdKey = (petId: number) => [`/pet/${petId}`] as const;

export type GetPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPetById>>
>;
export type GetPetByIdQueryError = void;

/**
 * @summary Find pet by ID
 */
export const useGetPetById = <TError = void>(
  petId: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getPetById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!petId;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetPetByIdKey(petId) : null));
  const swrFn = () => getPetById(petId);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  petId: number,
  updatePetWithFormBody: UpdatePetWithFormBody,
) => {
  const formUrlEncoded = new URLSearchParams();
  if (updatePetWithFormBody.name !== undefined) {
    formUrlEncoded.append("name", updatePetWithFormBody.name);
  }
  if (updatePetWithFormBody.status !== undefined) {
    formUrlEncoded.append("status", updatePetWithFormBody.status);
  }

  return customInstance<unknown>({
    url: `/pet/${petId}`,
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: formUrlEncoded,
  });
};

export const getUpdatePetWithFormMutationFetcher = (petId: number) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<unknown> => {
    return updatePetWithForm(petId, arg as UpdatePetWithFormBody);
  };
};
export const getUpdatePetWithFormMutationKey = (petId: number) =>
  `/pet/${petId}` as const;

export type UpdatePetWithFormMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePetWithForm>>
>;
export type UpdatePetWithFormMutationError = void;

/**
 * @summary Updates a pet in the store with form data
 */
export const useUpdatePetWithForm = <TError = void>(
  petId: number,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof updatePetWithForm>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof updatePetWithForm>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getUpdatePetWithFormMutationKey(petId);
  const swrFn = getUpdatePetWithFormMutationFetcher(petId);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Deletes a pet
 */
export const deletePet = (petId: number) => {
  return customInstance<unknown>({ url: `/pet/${petId}`, method: "DELETE" });
};

export const getDeletePetMutationFetcher = (petId: number) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<unknown> => {
    return deletePet(petId);
  };
};
export const getDeletePetMutationKey = (petId: number) =>
  `/pet/${petId}` as const;

export type DeletePetMutationResult = NonNullable<
  Awaited<ReturnType<typeof deletePet>>
>;
export type DeletePetMutationError = void;

/**
 * @summary Deletes a pet
 */
export const useDeletePet = <TError = void>(
  petId: number,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof deletePet>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof deletePet>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getDeletePetMutationKey(petId);
  const swrFn = getDeletePetMutationFetcher(petId);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary uploads an image
 */
export const uploadFile = (petId: number, uploadFileBody: UploadFileBody) => {
  const formData = new FormData();
  if (uploadFileBody.additionalMetadata !== undefined) {
    formData.append("additionalMetadata", uploadFileBody.additionalMetadata);
  }
  if (uploadFileBody.file !== undefined) {
    formData.append("file", uploadFileBody.file);
  }

  return customInstance<ApiResponse>({
    url: `/pet/${petId}/uploadImage`,
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  });
};

export const getUploadFileMutationFetcher = (petId: number) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<ApiResponse> => {
    return uploadFile(petId, arg as UploadFileBody);
  };
};
export const getUploadFileMutationKey = (petId: number) =>
  `/pet/${petId}/uploadImage` as const;

export type UploadFileMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadFile>>
>;
export type UploadFileMutationError = unknown;

/**
 * @summary uploads an image
 */
export const useUploadFile = <TError = unknown>(
  petId: number,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof uploadFile>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof uploadFile>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getUploadFileMutationKey(petId);
  const swrFn = getUploadFileMutationFetcher(petId);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = () => {
  return customInstance<GetInventory200>({
    url: `/store/inventory`,
    method: "GET",
  });
};

export const getGetInventoryKey = () => [`/store/inventory`] as const;

export type GetInventoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getInventory>>
>;
export type GetInventoryQueryError = unknown;

/**
 * @summary Returns pet inventories by status
 */
export const useGetInventory = <TError = unknown>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof getInventory>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
}) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetInventoryKey() : null));
  const swrFn = () => getInventory();

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Place an order for a pet
 */
export const placeOrder = (order: Order) => {
  return customInstance<Order>({
    url: `/store/order`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: order,
  });
};

export const getPlaceOrderMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<Order> => {
    return placeOrder(arg as Order);
  };
};
export const getPlaceOrderMutationKey = () => `/store/order` as const;

export type PlaceOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof placeOrder>>
>;
export type PlaceOrderMutationError = void;

/**
 * @summary Place an order for a pet
 */
export const usePlaceOrder = <TError = void>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof placeOrder>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof placeOrder>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getPlaceOrderMutationKey();
  const swrFn = getPlaceOrderMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
 * @summary Find purchase order by ID
 */
export const getOrderById = (orderId: number) => {
  return customInstance<Order>({
    url: `/store/order/${orderId}`,
    method: "GET",
  });
};

export const getGetOrderByIdKey = (orderId: number) =>
  [`/store/order/${orderId}`] as const;

export type GetOrderByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getOrderById>>
>;
export type GetOrderByIdQueryError = void;

/**
 * @summary Find purchase order by ID
 */
export const useGetOrderById = <TError = void>(
  orderId: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getOrderById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!orderId;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getGetOrderByIdKey(orderId) : null));
  const swrFn = () => getOrderById(orderId);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (orderId: string) => {
  return customInstance<unknown>({
    url: `/store/order/${orderId}`,
    method: "DELETE",
  });
};

export const getDeleteOrderMutationFetcher = (orderId: string) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<unknown> => {
    return deleteOrder(orderId);
  };
};
export const getDeleteOrderMutationKey = (orderId: string) =>
  `/store/order/${orderId}` as const;

export type DeleteOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteOrder>>
>;
export type DeleteOrderMutationError = void;

/**
 * @summary Delete purchase order by ID
 */
export const useDeleteOrder = <TError = void>(
  orderId: string,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof deleteOrder>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof deleteOrder>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getDeleteOrderMutationKey(orderId);
  const swrFn = getDeleteOrderMutationFetcher(orderId);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (user: User) => {
  return customInstance<User>({
    url: `/user`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: user,
  });
};

export const getCreateUserMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<User> => {
    return createUser(arg as User);
  };
};
export const getCreateUserMutationKey = () => `/user` as const;

export type CreateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>;
export type CreateUserMutationError = unknown;

/**
 * @summary Create user
 */
export const useCreateUser = <TError = unknown>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof createUser>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getCreateUserMutationKey();
  const swrFn = getCreateUserMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithArrayInput = (userArrayBody: UserArrayBody) => {
  return customInstance<void>({
    url: `/user/createWithArray`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: userArrayBody,
  });
};

export const getCreateUsersWithArrayInputMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<void> => {
    return createUsersWithArrayInput(arg as UserArrayBody);
  };
};
export const getCreateUsersWithArrayInputMutationKey = () =>
  `/user/createWithArray` as const;

export type CreateUsersWithArrayInputMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUsersWithArrayInput>>
>;
export type CreateUsersWithArrayInputMutationError = void;

/**
 * @summary Creates list of users with given input array
 */
export const useCreateUsersWithArrayInput = <TError = void>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof createUsersWithArrayInput>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof createUsersWithArrayInput>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey =
    swrOptions?.swrKey ?? getCreateUsersWithArrayInputMutationKey();
  const swrFn = getCreateUsersWithArrayInputMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (userArrayBody: UserArrayBody) => {
  return customInstance<void>({
    url: `/user/createWithList`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: userArrayBody,
  });
};

export const getCreateUsersWithListInputMutationFetcher = () => {
  return (_: string, { arg }: { arg: Arguments }): Promise<void> => {
    return createUsersWithListInput(arg as UserArrayBody);
  };
};
export const getCreateUsersWithListInputMutationKey = () =>
  `/user/createWithList` as const;

export type CreateUsersWithListInputMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUsersWithListInput>>
>;
export type CreateUsersWithListInputMutationError = void;

/**
 * @summary Creates list of users with given input array
 */
export const useCreateUsersWithListInput = <TError = void>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof createUsersWithListInput>>,
    TError,
    string,
    Arguments,
    Awaited<ReturnType<typeof createUsersWithListInput>>
  > & { swrKey?: string };
}) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getCreateUsersWithListInputMutationKey();
  const swrFn = getCreateUsersWithListInputMutationFetcher();

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Logs user into the system
 */
export const loginUser = (params: LoginUserParams) => {
  return customInstance<string>({ url: `/user/login`, method: "GET", params });
};

export const getLoginUserKey = (params: LoginUserParams) =>
  [`/user/login`, ...(params ? [params] : [])] as const;

export type LoginUserQueryResult = NonNullable<
  Awaited<ReturnType<typeof loginUser>>
>;
export type LoginUserQueryError = void;

/**
 * @summary Logs user into the system
 */
export const useLoginUser = <TError = void>(
  params: LoginUserParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof loginUser>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getLoginUserKey(params) : null));
  const swrFn = () => loginUser(params);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = () => {
  return customInstance<void>({ url: `/user/logout`, method: "GET" });
};

export const getLogoutUserKey = () => [`/user/logout`] as const;

export type LogoutUserQueryResult = NonNullable<
  Awaited<ReturnType<typeof logoutUser>>
>;
export type LogoutUserQueryError = void;

/**
 * @summary Logs out current logged in user session
 */
export const useLogoutUser = <TError = void>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof logoutUser>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
}) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getLogoutUserKey() : null));
  const swrFn = () => logoutUser();

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Get user by user name
 */
export const getUserByName = (username: string) => {
  return customInstance<User>({ url: `/user/${username}`, method: "GET" });
};

export const getGetUserByNameKey = (username: string) =>
  [`/user/${username}`] as const;

export type GetUserByNameQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUserByName>>
>;
export type GetUserByNameQueryError = void;

/**
 * @summary Get user by user name
 */
export const useGetUserByName = <TError = void>(
  username: string,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof getUserByName>>,
      TError
    > & { swrKey?: Key; enabled?: boolean };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!username;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getGetUserByNameKey(username) : null));
  const swrFn = () => getUserByName(username);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    {
      ...swrOptions,
    },
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * This can only be done by the logged in user.
 * @summary Updated user
 */
export const updateUser = (username: string, user: User) => {
  return customInstance<unknown>({
    url: `/user/${username}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: user,
  });
};

export const getUpdateUserMutationFetcher = (username: string) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<unknown> => {
    return updateUser(username, arg as User);
  };
};
export const getUpdateUserMutationKey = (username: string) =>
  `/user/${username}` as const;

export type UpdateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateUser>>
>;
export type UpdateUserMutationError = void;

/**
 * @summary Updated user
 */
export const useUpdateUser = <TError = void>(
  username: string,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof updateUser>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof updateUser>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getUpdateUserMutationKey(username);
  const swrFn = getUpdateUserMutationFetcher(username);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = (username: string) => {
  return customInstance<unknown>({
    url: `/user/${username}`,
    method: "DELETE",
  });
};

export const getDeleteUserMutationFetcher = (username: string) => {
  return (_: string, { arg }: { arg: Arguments }): Promise<unknown> => {
    return deleteUser(username);
  };
};
export const getDeleteUserMutationKey = (username: string) =>
  `/user/${username}` as const;

export type DeleteUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteUser>>
>;
export type DeleteUserMutationError = void;

/**
 * @summary Delete user
 */
export const useDeleteUser = <TError = void>(
  username: string,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof deleteUser>>,
      TError,
      string,
      Arguments,
      Awaited<ReturnType<typeof deleteUser>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getDeleteUserMutationKey(username);
  const swrFn = getDeleteUserMutationFetcher(username);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};