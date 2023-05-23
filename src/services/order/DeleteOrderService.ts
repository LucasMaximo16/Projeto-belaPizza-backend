import { OrderRepository } from './../../Repository/Order/OrderRepository';

export class DeleteOrderService {
    async execute(id: string) {
        const orderRepository = new OrderRepository();
        const verifyOrder = await orderRepository.getById(id);

        if (!verifyOrder) {
            throw new Error("Invalid ID");
        }

        try {
            const resultado = await orderRepository.deleteItensOrder(id);
            console.log(resultado.status);
        } catch (error) {
            console.log(error);
        }
        const result = await orderRepository.delete(id);
        console.log(result.status);
        return result;
    }
}
