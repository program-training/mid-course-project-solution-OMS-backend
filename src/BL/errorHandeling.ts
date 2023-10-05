export class AppError extends Error {
    status:number;

    constructor(message:string, status:number) {
        super(message);
        this.status = status;
    }
}


export const invalidCridentialsError = () => new AppError('invalid credentials',400);
export const userNotFoundError = () => new AppError('user not found',404);
export const invalidTokenError = () => new AppError('action not authorized',400);
export const invalidEmailOrPasswordError = () => new AppError('incorrect email or password',400);
export const productsNotInInventoryError = () => new AppError('transcation failed, products out of stock',404);
export const userAlreadyExistsError = () => new AppError('transcation failed, products out of stock',404);
export const genericError = (message:string = "internal server error") => new AppError(message,500);
export const passwordMisMatchError = () => new AppError('passwords do not match',400);
