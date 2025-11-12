import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";
    

const router = express.Router();
console.log(">>> routes/index.js loaded");
router.use("/users", userRoutes); //api/user/login
router.use("/task", taskRoutes);


export default router;
