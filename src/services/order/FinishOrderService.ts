import { OrderRepository } from "../../Repository/Order/OrderRepository";

export interface order_id {
    id: string
}

export class FinishOrderService {
    async execute(order_id: string) {

        console.log("order_id", order_id);
        
        const orderRepository = new OrderRepository
        const result = orderRepository.finishOrder2(order_id)

        return result
    }
}