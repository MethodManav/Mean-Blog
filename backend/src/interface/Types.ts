export interface Bindings {
  DATABASE_URL: string;
  JWT: string;
  S3_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  BUCKET_NAME: string;
}
export interface Variables {
  userId: string;
  imageKey: string;
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
