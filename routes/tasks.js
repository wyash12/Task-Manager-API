
const r = require('express');
const router = r.Router();

const {getAllTasks,getTask,
    updateTask,
    deleteTask,
    createTask,} = require('../controller/tasks')


router.route('/').get(getAllTasks);

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
module.exports = router;