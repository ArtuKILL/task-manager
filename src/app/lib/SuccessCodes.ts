export const  SUCCESS_CODES = {
  OK: 200,
  CREATED: 201,
} as const;

type ObjectValues<T> = T[keyof T];

export type SuccessCodes = ObjectValues<typeof SUCCESS_CODES>;


