import { prismaClient } from '../../prisma';
import { IDatabaseResponse } from './../../types/IDatabaseRespose';

export class GetProductRepository {

    async getAllProduct(): IDatabaseResponse {
        return await prismaClient.product.findMany()
        .then((result) => {
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