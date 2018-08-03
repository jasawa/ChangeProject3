const router = require("express").Router();
const blogRoutes = require("./blogs");

// Book routes
router.use("/blogs", blogRoutes);

module.exports = router;
