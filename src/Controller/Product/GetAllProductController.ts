import { GetAllProductService } from '../../services/product/getAllProductService';
import { GetProductByCategoryService } from './../../services/product/getProductyCategoryService';
import { Request, Response } from "express";

export class GetAllProductController {
    async handle(request: Request, response: Response) {
        try {
            const getAllProductService = new GetAllProductService()
            const result = await getAllProductService.execute()
            
            return response.status(result.status).json(result)
        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}