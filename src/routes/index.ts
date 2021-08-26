import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

// Soda-route
const sodaRouter = Router();
sodaRouter.get('/all', getAllSodas);
sodaRouter.post('/add', addOneSoda);
sodaRouter.put('/update', updateOneSoda);
sodaRouter.delete('/delete/:id', deleteOneSoda);

// Snack-route
const snackRouter = Router();
snackRouter.get('/all', getAllSnacks);
snackRouter.post('/add', addOneSnack);
snackRouter.put('/update', updateOneSnack);
snackRouter.delete('/delete/:id', deleteOneSnack);



// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
export default baseRouter;
