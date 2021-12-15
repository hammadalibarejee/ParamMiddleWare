import express from "express";
import controller from './../RoutingController/controller.mjs';

const router=express.Router();

router
    .route('/')
    .get(controller.getUser)
    .post(controller.postUser)


modules.exports= router;    