import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

export class FinishOrderController {
    async handle(request: Request, response: Response) {
        
        const {order_id} = request.body

        console.log("order_id2", order_id);
        
        try {
            const orderService = new FinishOrderService
            const result = await orderService.execute(order_id)
            console.log(order_id);
            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}
