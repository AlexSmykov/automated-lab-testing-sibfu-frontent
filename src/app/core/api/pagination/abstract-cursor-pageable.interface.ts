export type TCursorPageable<T> = {
  count: number;
  results: T[];
};

export type TCursorPageableQuery = {
  size: number;
  page?: number;
};
