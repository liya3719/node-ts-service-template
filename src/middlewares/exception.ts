import { BusinessError } from "../exception/businessError";
const logger = require("../utils/logger.js").getLogger("exception.ts");
/**
 * 全站错误统一拦截中间件
 * @returns {Function}
 */
import { Middleware, KoaMiddlewareInterface } from "routing-controllers";
const format = require("string-format");
@Middleware({ type: "before" })
export class ExceptionMiddleware implements KoaMiddlewareInterface {
	use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
		return next().then((result) => {
			//context.body = result;
		}).catch(error => {
			logger.error(`client request happen error,the error stack message is \r\n${error.stack}`);
			if (error instanceof BusinessError) {
				context.body = {
					errorCode: error.errorCode,
					message: error.message
				}
			} else if (error.name === "BadRequestError") {
				let errorMsgObject = error.errors[0];
				let errorMsg = "";
				for (let key in errorMsgObject.constraints) {
					if (!errorMsg) {
						errorMsg = format(errorMsgObject.constraints[key], errorMsgObject.property);
					}
				}
				context.body = {
					errorCode: 400,
					message: errorMsg
				}
			} else {
				context.body = {
					errorCode: 500,
					message: "服务器繁忙"
				}
			}
		});
	}
}
