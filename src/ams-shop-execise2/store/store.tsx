export type StoreSet = <A extends string | { type: string }>(
    partial: any,
    replace?: boolean | undefined,
    action?: A | undefined
  ) => void;

  export type StoreGet = <A extends string | { type: string }>(
    partial: any,
    replace?: boolean | undefined,
    action?: A | undefined
  ) => void;