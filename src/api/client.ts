import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const Pet = z
  .object({ id: z.number().int(), name: z.string() })
  .partial()
  .passthrough();
const updatePetWithForm_Body = z
  .object({ name: z.string(), status: z.string() })
  .partial()
  .passthrough();
const uploadFile_Body = z
  .object({ additionalMetadata: z.string(), file: z.instanceof(File) })
  .partial()
  .passthrough();
const ApiResponse = z
  .object({ code: z.number().int(), type: z.string(), message: z.string() })
  .partial()
  .passthrough();
const Order = z
  .object({
    id: z.number().int(),
    petId: z.number().int(),
    quantity: z.number().int(),
    shipDate: z.string().datetime({ offset: true }),
    status: z.enum(["placed", "approved", "delivered"]),
    complete: z.boolean(),
  })
  .partial()
  .passthrough();
const User = z
  .object({ id: z.number().int(), username: z.string() })
  .partial()
  .passthrough();

export const schemas = {
  Pet,
  updatePetWithForm_Body,
  uploadFile_Body,
  ApiResponse,
  Order,
  User,
};

const endpoints = makeApi([
  {
    method: "post",
    path: "/pet",
    alias: "addPet",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Pet object that needs to be added to the store`,
        type: "Body",
        schema: Pet,
      },
    ],
    response: Pet,
    errors: [
      {
        status: 405,
        description: `Invalid input`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/pet",
    alias: "updatePet",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Pet object that needs to be added to the store`,
        type: "Body",
        schema: Pet,
      },
    ],
    response: Pet,
    errors: [
      {
        status: 400,
        description: `Invalid ID supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Pet not found`,
        schema: z.void(),
      },
      {
        status: 405,
        description: `Validation exception`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/pet/:petId",
    alias: "getPetById",
    description: `Returns a single pet`,
    requestFormat: "json",
    parameters: [
      {
        name: "petId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: Pet,
    errors: [
      {
        status: 400,
        description: `Invalid ID supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Pet not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/pet/:petId",
    alias: "updatePetWithForm",
    requestFormat: "form-url",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: updatePetWithForm_Body,
      },
      {
        name: "petId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 405,
        description: `Invalid input`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/pet/:petId",
    alias: "deletePet",
    requestFormat: "json",
    parameters: [
      {
        name: "api_key",
        type: "Header",
        schema: z.string().optional(),
      },
      {
        name: "petId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid pet value`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/pet/:petId/uploadImage",
    alias: "uploadFile",
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: uploadFile_Body,
      },
      {
        name: "petId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: ApiResponse,
  },
  {
    method: "get",
    path: "/pet/findByStatus",
    alias: "findPetsByStatus",
    description: `Multiple status values can be provided with comma separated strings`,
    requestFormat: "json",
    parameters: [
      {
        name: "status",
        type: "Query",
        schema: z.array(z.enum(["available", "pending", "sold"])),
      },
    ],
    response: z.array(Pet),
    errors: [
      {
        status: 400,
        description: `Invalid status value`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/store/inventory",
    alias: "getInventory",
    description: `Returns a map of status codes to quantities`,
    requestFormat: "json",
    response: z.record(z.number().int()),
  },
  {
    method: "post",
    path: "/store/order",
    alias: "placeOrder",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `order placed for purchasing the pet`,
        type: "Body",
        schema: Order,
      },
    ],
    response: Order,
    errors: [
      {
        status: 400,
        description: `Invalid Order`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/store/order/:orderId",
    alias: "getOrderById",
    description: `For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generate exceptions`,
    requestFormat: "json",
    parameters: [
      {
        name: "orderId",
        type: "Path",
        schema: z.number().int().gte(1).lte(5),
      },
    ],
    response: Order,
    errors: [
      {
        status: 400,
        description: `Invalid ID supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Order not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/store/order/:orderId",
    alias: "deleteOrder",
    description: `For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors`,
    requestFormat: "json",
    parameters: [
      {
        name: "orderId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid ID supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Order not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/user",
    alias: "createUser",
    description: `This can only be done by the logged in user.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Created user object`,
        type: "Body",
        schema: User,
      },
    ],
    response: User,
  },
  {
    method: "get",
    path: "/user/:username",
    alias: "getUserByName",
    requestFormat: "json",
    parameters: [
      {
        name: "username",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: User,
    errors: [
      {
        status: 400,
        description: `Invalid username supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/user/:username",
    alias: "updateUser",
    description: `This can only be done by the logged in user.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Updated user object`,
        type: "Body",
        schema: User,
      },
      {
        name: "username",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid user supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/user/:username",
    alias: "deleteUser",
    description: `This can only be done by the logged in user.`,
    requestFormat: "json",
    parameters: [
      {
        name: "username",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid username supplied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/user/createWithArray",
    alias: "createUsersWithArrayInput",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `List of user object`,
        type: "Body",
        schema: z.array(User),
      },
    ],
    response: z.void(),
  },
  {
    method: "post",
    path: "/user/createWithList",
    alias: "createUsersWithListInput",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `List of user object`,
        type: "Body",
        schema: z.array(User),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/user/login",
    alias: "loginUser",
    requestFormat: "json",
    parameters: [
      {
        name: "username",
        type: "Query",
        schema: z.string().regex(/^[a-zA-Z0-9]+[a-zA-Z0-9\.\-_]*[a-zA-Z0-9]+$/),
      },
      {
        name: "password",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Invalid username/password supplied`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/user/logout",
    alias: "logoutUser",
    requestFormat: "json",
    response: z.void(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
