import { OrderRepository } from "../../Repository/Order/OrderRepository";

export class FinishOrderService {
    async execute(order_id: string) {

        const orderRepository = new OrderRepository
        const result = orderRepository.finishOrder(order_id)

        return result
    }
}