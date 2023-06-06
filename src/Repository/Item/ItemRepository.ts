import { order_id } from './../../services/order/FinishOrderService';
import { IDatabaseResponse } from './../../types/IDatabaseRespose';
import { prismaClient } from "../../../prisma";
import { DeleteItemDTO } from '../../DTO/ItemDTO/deleteItemDTO';

export interface ItemProps {
    order_id: string
    product_id: string
    amount: number
}

export interface ItemPropsId {
    id: string
}


export class ItemRepository {
    async create(data: ItemProps): IDatabaseResponse {
        return await prismaClient.item.create({
            data: {
                product_id: data.product_id,
                order_id: data.order_id,
                amount: data.amount
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            return {
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }

    async delete(data: DeleteItemDTO): IDatabaseResponse {
        console.log(data);
        return await prismaClient.item.deleteMany({
            where: {
                order_id: data.order_id,
                id: data.id
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            return {
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }
}