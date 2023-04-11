import { CategoryRepository } from './../../Repository/Category/categoryRepostiory';
export class DeleteCategoryService {
    async execute(id:string) {
        
        const categoryRepository = new CategoryRepository

        const result = await categoryRepository.delete(id)

        return result
    }
}