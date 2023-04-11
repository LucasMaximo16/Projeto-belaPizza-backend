import { OrderRepository } from './../../Repository/Order/OrderRepository';

export interface order_id {
    id: string
}

export class SendPutOrderService {
    async execute(order_id: order_id) {

        const orderRepository = new OrderRepository

        const result = await orderRepository.sendOrder(order_id.id)

        return result
    }
}