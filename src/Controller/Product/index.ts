import { CreateProductController } from './CreateProductController';
import { GetAllProductController } from './GetAllProductController';
import { GetProductByCategoryController } from './GetProductByCategoryController';

const createProductController = new CreateProductController()
const getProductByCategory = new GetProductByCategoryController()
const getAllProduct = new GetAllProductController()

export { createProductController, getProductByCategory, getAllProduct }