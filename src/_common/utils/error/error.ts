export class NariError extends Error {
  statusCode: string;
  errorCode: string;
  

  constructor({
    statusCode,
    message,
    errorCode,
  }: {
    statusCode: string;
    message: string;
    errorCode: string;
  }) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
