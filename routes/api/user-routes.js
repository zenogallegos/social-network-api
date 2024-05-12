const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getSingleUser);
router.route('/:id').delete(deleteUser);

module.exports = router;