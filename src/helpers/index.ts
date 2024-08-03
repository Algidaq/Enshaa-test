export type PromiseResult<T extends any> =
  | { data: T; error: undefined }
  | { data: undefined; error: string | Object };
