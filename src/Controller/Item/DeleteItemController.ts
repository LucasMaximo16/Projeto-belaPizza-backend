import { Request, Response } from 'express';
import { DeleteItemService } from '../../services/Item/deleteItemService';
export class DeleteItemController {
    async handle(request: Request, response: Response) {

        const  iditem  = request.body

        try {
            const deleteItemService = new DeleteItemService
            const result = await deleteItemService.execute(iditem)

            return response.status(result.status).json(result.data)

        } catch (error) {
            const messageError = (error as Error).message
            return response.status(400).json(messageError)
        }
    }
}