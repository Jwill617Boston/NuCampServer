const express = require("express");
const Promotion = require("../models/Promotion");

const PromotionRouter = express.Router();

PromotionRouter.route("/")
   .get((req, res, next) => {
      Promotion.find()
         .then((Promotions) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(Promotions);
         })
         .catch((err) => next(err));
   })
   .post((req, res, next) => {
      Promotion.create(req.body)
         .then((Promotion) => {
            console.log("Promotion Created ", Promotion);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(Promotion);
         })
         .catch((err) => next(err));
   })
   .put((req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /Promotions");
   })
   .delete((req, res, next) => {
      Promotion.deleteMany()
         .then((response) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(response);
         })
         .catch((err) => next(err));
   });

module.exports = promotionRouter;