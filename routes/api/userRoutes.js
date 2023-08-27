const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUser).delete(deleteUser);

//router.route('/:userId/friends').post(addFriend)

//router.router('/:userId/friends/:friendsId').delete(deleteFriend)

//.put(updateUser)

module.exports = router;