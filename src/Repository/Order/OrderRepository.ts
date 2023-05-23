import { prismaClient } from '../../prisma';
import { IDatabaseResponse } from './../../types/IDatabaseRespose';
export interface IOrder {
    table: number
    name: string
}
export interface Iorder_id {
    id: string
}

export class OrderRepository {
    async create(data: IOrder): IDatabaseResponse {
        return await prismaClient.order.create({
            data: {
                table: data.table,
                name: data.name
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

    async getById(id: string) {
        return await prismaClient.order.findFirst({
            where: {
                id: id
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            return {
                status: 200,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }

    async deleteItensOrder(idOrder: string): IDatabaseResponse {
        console.log(idOrder);
        try {
            const deletedItems = await prismaClient.item.deleteMany({
                where: {
                    order_id: {
                        equals: idOrder
                    }
                }
            });

            return {
                status: 200,
                data: deletedItems
            };
        } catch (error) {
            return {
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            };
        }
    }


    async delete(id: string) {
        return await prismaClient.order.delete({
            where: {
                id: id
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

    async sendOrder(order_id: string): IDatabaseResponse {
        return await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
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

    async getAllOrders() {
        return await prismaClient.order.findMany({
            where: {
                draft: false
            },
            orderBy: {
                created_at: "desc"
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            console.log(error);
            return {
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }

    async detailOrder(order_id: string): IDatabaseResponse {
        return await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
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

    async finishOrder(order_id: string): IDatabaseResponse {
        console.log(order_id);
        return await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
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
