class APIError extends BaseError {
  constructor(
    name: string,
    httpCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
    description = "internal server error",
    isOperational = true
  ) {
    super(name, httpCode, description, isOperational);
  }
}
