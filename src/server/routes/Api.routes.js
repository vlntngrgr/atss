import express from "express";

const router = new express.Route();

router.get("/", (req, res) => {
    console.log(req.query);
    res.json({});
});

export default router;
