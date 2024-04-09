const express = require("express");
const router = express.Router();
const {createReview, getReviews, getReviewByID, getReview,deleteReview} = require('../controllers/reviewController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route('/').post(createReview).get(getReviews);
router.route('/:id/profile').get(getReview);
router.route('/:id').get(getReviewByID);

module.exports= router;
