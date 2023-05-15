import { auth } from './../Middlewares/auth';
import { Request, Response, Router } from "express";
import { createOrderController, deleteOrderController, detailOrderController, finishOrderController, getAllOrdersController, sendPutOrderController } from "../Controller/Order";
import { createItemController, deleteItemController } from '../Controller/Item';

const orderRoutes = Router()

orderRoutes.post('/',(request: Request, response: Response) => {
    return createOrderController.handle(request, response)
})

orderRoutes.post('/add', (request: Request, response: Response) => {
    return createItemController.handle(request, response)
})
orderRoutes.post('/remove', auth, (request: Request, response: Response) => {
    return deleteItemController.handle(request, response)
})
orderRoutes.get('/all', (request: Request, response: Response) => {
    return getAllOrdersController.handle(request, response)
})
orderRoutes.get('/detail/:order_id', (request: Request, response: Response) => {
    return detailOrderController.handle(request, response)
})
orderRoutes.delete('/:order_id', auth, (request: Request, response: Response) => {
    return deleteOrderController.handle(request, response)
})
orderRoutes.put('/',  (request: Request, response: Response) => {
    return sendPutOrderController.handle(request, response)
})
orderRoutes.put('/finish', auth, (request: Request, response: Response) => {
    return finishOrderController.handle(request, response)
})



export { orderRoutes }