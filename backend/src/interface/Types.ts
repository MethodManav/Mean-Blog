export interface Bindings {
  DATABASE_URL: string;
  JWT: string;
}
export interface Variables {
  userId: string;
}

export interface ILooseObject {
  [key: string]: any;
}

export interface ResponsePayload {
  success: boolean;
  data?: any;
  message?: string;
  error?: any;
}
