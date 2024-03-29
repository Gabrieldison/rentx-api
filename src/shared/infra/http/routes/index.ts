import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { carRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { passwordRoutes } from "./passwords.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationsRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use("/rentals", rentalRoutes);
router.use("/password", passwordRoutes);
router.use(authenticateRoutes);

export { router };
