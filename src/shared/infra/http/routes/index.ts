import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { carRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use(authenticateRoutes);

export { router };
