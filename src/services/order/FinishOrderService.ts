import { OrderRepository } from "../../Repository/Order/OrderRepository";

export interface order_id {
    id: string
}

export class FinishOrderService {
    async execute(order_id: order_id) {

        const orderRepository = new OrderRepository
        const result = orderRepository.finishOrder(order_id.id)

        return result
    }
}