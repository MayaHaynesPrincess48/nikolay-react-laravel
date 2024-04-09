const express = require("express");
const router = express.Router();
const {createUserInfo, getUsers, getUserInfoByID, getUserInfo,deleteUserInfo,updateUserInfo} = require('../controllers/userInfoController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");


router.route('/').post(createUserInfo).get(getUsers);
router.route('/:id/profile').get(getUserInfo).put(updateUserInfo);
router.route('/:id').get(getUserInfoByID).delete(deleteUserInfo);
module.exports= router;
