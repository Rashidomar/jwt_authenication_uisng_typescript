export enum statusCodes {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }

interface AppErrorArgs {
    status?: string;
    statusCode: statusCodes;
    message: string;
    isOperational?: boolean;
}

export class AppError extends Error {

    public status: string;
    public statusCode: statusCodes;
    public isOperational: boolean = true;
  
    constructor(args: AppErrorArgs) {

      super(args.message);
      this.status = args.status || "Error";
      this.statusCode = args.statusCode;

      Object.setPrototypeOf(this, new.target.prototype);

  
      if (args.isOperational !== undefined) {
        this.isOperational = args.isOperational;
      }
  
      Error.captureStackTrace(this);
    }
  }