const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  postNewUser,
  putUserById,
  deleteUserById,
  postNewFriend,
  deleteFriend
} = require('../../controllers/userController.js');

// /api/users
router
  .route('/')
  //GET all users
  .get(getAllUsers)
  //POST a new user 
  .post(postNewUser);

// /api/users/:userId
router
  .route('/:id')
  //GET a single user by its _id and populated thought and friend data
  .get(getUserById)
  //PUT to update a user by its _id
  .put(putUserById)
  //DELETE to remove user by its _id
  .delete(deleteUserById);

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  //POST to add a new friend to a user's friend list
  .post(postNewFriend)
  //DELETE to remove a friend from a user's friend list 
  .delete(deleteFriend);

module.exports = router;
