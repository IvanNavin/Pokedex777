export interface IStateRequest<T> {
  isLoading: boolean;
  data: null | T[];
  error: null | object;
}
