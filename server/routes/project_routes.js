const router = require("express").Router();
const { createProject, getAllProjects, getProject, deleteProject, updateProjectPeople, updateProjectStatus } = require("../controllers/projects_controller")
const { checkLogin, checkAdmin } = require("../middlewares/authMiddleware");


router.post('/create', checkAdmin, createProject)
router.get('/getproject/:id', getProject)
router.get('/getallprojects', getAllProjects)
router.delete('/delete/:id', checkAdmin, deleteProject)
router.patch('/updatestatus/:id', checkAdmin, updateProjectStatus)
router.patch('/updatepeople/:id', checkLogin, updateProjectPeople)

module.exports = router;