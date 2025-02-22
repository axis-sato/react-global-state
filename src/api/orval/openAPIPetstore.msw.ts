/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.0
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";
import type {
  ApiResponse,
  GetInventory200,
  Order,
  Pet,
  User,
} from "../../model";

export const getAddPetResponseMock = (overrideResponse: any = {}): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getUpdatePetResponseMock = (overrideResponse: any = {}): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getFindPetsByStatusResponseMock = (
  overrideResponse: any = {},
): Pet[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    ...overrideResponse,
  }));

export const getFindPetsByTagsResponseMock = (
  overrideResponse: any = {},
): Pet[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    ...overrideResponse,
  }));

export const getGetPetByIdResponseMock = (overrideResponse: any = {}): Pet => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  name: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getUploadFileResponseMock = (
  overrideResponse: any = {},
): ApiResponse => ({
  code: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  message: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  type: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getGetInventoryResponseMock = (): GetInventory200 => ({
  [faker.string.alphanumeric(5)]: faker.number.int({
    min: undefined,
    max: undefined,
  }),
});

export const getPlaceOrderResponseMock = (
  overrideResponse: any = {},
): Order => ({
  complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]),
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  petId: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  quantity: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  shipDate: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split(".")[0]}Z`,
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["placed", "approved", "delivered"] as const),
    undefined,
  ]),
  ...overrideResponse,
});

export const getGetOrderByIdResponseMock = (
  overrideResponse: any = {},
): Order => ({
  complete: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]),
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  petId: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  quantity: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  shipDate: faker.helpers.arrayElement([
    `${faker.date.past().toISOString().split(".")[0]}Z`,
    undefined,
  ]),
  status: faker.helpers.arrayElement([
    faker.helpers.arrayElement(["placed", "approved", "delivered"] as const),
    undefined,
  ]),
  ...overrideResponse,
});

export const getCreateUserResponseMock = (
  overrideResponse: any = {},
): User => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  username: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getLoginUserResponseMock = (): string => faker.word.sample();

export const getGetUserByNameResponseMock = (
  overrideResponse: any = {},
): User => ({
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  username: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  ...overrideResponse,
});

export const getAddPetMockHandler = (overrideResponse?: Pet) => {
  return http.post("*/pet", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getAddPetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getUpdatePetMockHandler = (overrideResponse?: Pet) => {
  return http.put("*/pet", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getUpdatePetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getFindPetsByStatusMockHandler = (overrideResponse?: Pet[]) => {
  return http.get("*/pet/findByStatus", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getFindPetsByStatusResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getFindPetsByTagsMockHandler = (overrideResponse?: Pet[]) => {
  return http.get("*/pet/findByTags", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getFindPetsByTagsResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetPetByIdMockHandler = (overrideResponse?: Pet) => {
  return http.get("*/pet/:petId", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetPetByIdResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getUpdatePetWithFormMockHandler = () => {
  return http.post("*/pet/:petId", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getDeletePetMockHandler = () => {
  return http.delete("*/pet/:petId", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getUploadFileMockHandler = (overrideResponse?: ApiResponse) => {
  return http.post("*/pet/:petId/uploadImage", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getUploadFileResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetInventoryMockHandler = (
  overrideResponse?: GetInventory200,
) => {
  return http.get("*/store/inventory", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetInventoryResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getPlaceOrderMockHandler = (overrideResponse?: Order) => {
  return http.post("*/store/order", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPlaceOrderResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetOrderByIdMockHandler = (overrideResponse?: Order) => {
  return http.get("*/store/order/:orderId", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetOrderByIdResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getDeleteOrderMockHandler = () => {
  return http.delete("*/store/order/:orderId", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getCreateUserMockHandler = (overrideResponse?: User) => {
  return http.post("*/user", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getCreateUserResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getCreateUsersWithArrayInputMockHandler = () => {
  return http.post("*/user/createWithArray", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getCreateUsersWithListInputMockHandler = () => {
  return http.post("*/user/createWithList", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getLoginUserMockHandler = (overrideResponse?: string) => {
  return http.get("*/user/login", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getLoginUserResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getLogoutUserMockHandler = () => {
  return http.get("*/user/logout", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetUserByNameMockHandler = (overrideResponse?: User) => {
  return http.get("*/user/:username", async () => {
    await delay(0);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetUserByNameResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getUpdateUserMockHandler = () => {
  return http.put("*/user/:username", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getDeleteUserMockHandler = () => {
  return http.delete("*/user/:username", async () => {
    await delay(0);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};
export const getOpenAPIPetstoreMock = () => [
  getAddPetMockHandler(),
  getUpdatePetMockHandler(),
  getFindPetsByStatusMockHandler(),
  getFindPetsByTagsMockHandler(),
  getGetPetByIdMockHandler(),
  getUpdatePetWithFormMockHandler(),
  getDeletePetMockHandler(),
  getUploadFileMockHandler(),
  getGetInventoryMockHandler(),
  getPlaceOrderMockHandler(),
  getGetOrderByIdMockHandler(),
  getDeleteOrderMockHandler(),
  getCreateUserMockHandler(),
  getCreateUsersWithArrayInputMockHandler(),
  getCreateUsersWithListInputMockHandler(),
  getLoginUserMockHandler(),
  getLogoutUserMockHandler(),
  getGetUserByNameMockHandler(),
  getUpdateUserMockHandler(),
  getDeleteUserMockHandler(),
];
