import { Context } from "hono";
import { ResponsePayload } from "../interface/Types";
import { StatusCode } from "hono/utils/http-status";

export function SendResponse(
  c: Context,
  statusCode: StatusCode,
  payload: ResponsePayload
) {
  return c.json(payload, statusCode);
}
