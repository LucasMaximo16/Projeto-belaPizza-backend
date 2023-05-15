import { GetProductByCategoryRepository } from "../../Repository/Product/GetProductByCategoryRepository";
import { GetProductRepository } from "../../Repository/Product/GetProductRepository";

export class GetAllProductService {

    async execute() {

        const getAllProductRepository = new GetProductRepository()

        const result = getAllProductRepository.getAllProduct()
        
        return result
    }
}