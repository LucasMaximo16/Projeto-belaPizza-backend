import { DeleteItemDTO } from '../../DTO/ItemDTO/deleteItemDTO';
import { ItemRepository } from './../../Repository/Item/ItemRepository';
export class DeleteItemService {
    async execute(id: DeleteItemDTO) {

        const itemRepository = new ItemRepository

        const result = await itemRepository.delete(id)

        return result
    }
}