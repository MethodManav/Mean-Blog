export interface Bindings {
  DATABASE_URL: string;
  JWT: string;
}
export interface ILooseObject {
  [key: string]: any;
}

export type ENV<E extends Bindings = any> = E;
