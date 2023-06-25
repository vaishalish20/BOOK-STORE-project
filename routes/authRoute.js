import express from 'express';
import {registerController,loginController,testController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController} from '../controllers/authController.js'
import { requireSignIn, isAdmin } from '../middleware/authMiddleware.js';

 export const router = express.Router();

//routing
//register || post
router.post('/register',registerController);

//login || post 
router.post('/login',loginController);

 //Forgot password
 router.post('/forgot-password',forgotPasswordController)

 //test routes
 router.get('/test',requireSignIn,isAdmin,testController)

//protected user route auth
router.get('/user-auth', requireSignIn, (req,res)=>{
 res.status(200).send({ok:true});
})

//protected Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin,(req,res)=>{
 res.status(200).send({ok:true});
})
//update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)

// all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)


// module.exports = router;
export default router;