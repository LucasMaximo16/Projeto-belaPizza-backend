import { Iorder_id, OrderRepository } from './../../Repository/Order/OrderRepository';
export class DetailOrderService {

    async execute(order_id: string) {

        const orderRepository = new OrderRepository
        const result = orderRepository.detailOrder(order_id)

        return result
    }
}