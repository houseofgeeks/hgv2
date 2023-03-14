const router=require("express").Router();
const {createProject,getAllProjects,getProject,deleteProject,updateProject, updateProjectStatus} =require("../controllers/projects_controller")
const { checkLogin, checkAdmin } = require("../middlewares/authMiddleware");


router.post('/create',checkAdmin,createProject)
router.get('/getproject/:id',checkLogin,getProject)
router.get('/getallprojects',checkLogin,getAllProjects)
router.delete('/delete/:id',checkAdmin,deleteProject)
router.put('/updatestatus/:id',checkAdmin,updateProjectStatus)
router.put('/updatepeople/:id',checkLogin,updateProjectStatus)

module.exports=router;