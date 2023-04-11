import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const {idCategory} =  request.params
        
        try{
            const deleteCategoryService = new DeleteCategoryService()
            const result = await deleteCategoryService.execute(idCategory)

            return response.status(result.status).json(result.data)
        }
        catch(error){
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}