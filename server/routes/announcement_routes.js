const router = require("express").Router();
const {
  createAnnouncement,
  updateAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
} = require("../controllers/announcement_controller");
const { checkLogin, checkAdmin } = require("../middlewares/authMiddleware");

router.post("/", checkAdmin, createAnnouncement);
router.delete("/:id", checkAdmin, deleteAnnouncement);
router.patch("/:id", checkAdmin, updateAnnouncement);
router.get("/all", getAllAnnouncements);

module.exports = router;
