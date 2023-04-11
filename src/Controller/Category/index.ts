import { GetAllCategoryController } from './GetAllCategoryController';
import { CreateCategoryController } from './CreateCategoryController';
import { DeleteCategoryController } from './DeleteCategory';

const createCategoryController = new CreateCategoryController()
const getAllCategoryController = new GetAllCategoryController()
const deleteCategoryController = new DeleteCategoryController()

export { createCategoryController, getAllCategoryController , deleteCategoryController}