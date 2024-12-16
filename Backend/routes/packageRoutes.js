import { Router } from "express";
import { getAllPackages, getPackageById } from "../controllers/packageController.js";

const packageRouter = Router();

packageRouter.get('/',getAllPackages);

packageRouter.get('/:id',getPackageById);


export default packageRouter;