const router = require("express").Router();
const { createProject, getAllProjects,getUpcomingProjects,getPastProjects,getOngoingProjects, getProject, deleteProject, updateProjectPeople, updateProjectStatus } = require("../controllers/projects_controller")
const { checkLogin, checkAdmin } = require("../middlewares/authMiddleware");


router.post('/create', checkAdmin, createProject)
router.get('/getproject/:id', getProject)
router.get('/getallprojects', getAllProjects)
router.get('/getupcomingprojects', getUpcomingProjects)
router.get('/getongoingprojects', getOngoingProjects)
router.get('/getpastprojects', getPastProjects)
router.delete('/delete/:id', checkAdmin, deleteProject)
router.patch('/updatestatus/:id', checkAdmin, updateProjectStatus)
router.patch('/updatepeople/:id', checkLogin, updateProjectPeople)

module.exports = router;