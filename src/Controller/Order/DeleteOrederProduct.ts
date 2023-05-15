import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

export class DeleteOrderController {
    async handle(request: Request, response: Response) {
        const { order_id } = request.params

        try {
            const deleteOrederService = new DeleteOrderService
            const result = await deleteOrederService.execute(order_id)

            return response.status(result.status).json(result.data)
        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}