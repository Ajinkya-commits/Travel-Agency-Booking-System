import { Router } from "express";
import { addPackage, deletePackage, getAllBookings, updatePackage } from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.post("/packages", addPackage);

adminRouter.put('/packages/:id',updatePackage)

adminRouter.delete('/packages/:id',deletePackage);

adminRouter.get('/bookings',getAllBookings);

export default adminRouter;
