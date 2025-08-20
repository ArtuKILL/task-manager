export const ERROR_CODES = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
} as const;

type ObjectValues<T> = T[keyof T];

export type ErrorCodes= ObjectValues<typeof ERROR_CODES>;


