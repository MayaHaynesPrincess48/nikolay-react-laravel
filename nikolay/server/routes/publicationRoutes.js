const express = require("express");
const router = express.Router();
const {createPublication, getPublication, getPublicationByID, getPublicationProfile,deletePublication,updatePublication, views, like, unlike, favourite} = require('../controllers/publicationController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route('/').post(createPublication).get(getPublication);
router.route('/:id/profile').get(getPublicationProfile).put(updatePublication);
router.route('/:id/view').put(views);
router.route('/:id/like').put(like);
router.route('/:id/unlike').put(unlike);
router.route('/:id/favourites').put(favourite);

router.route('/:id').delete(deletePublication).get(getPublicationByID);


module.exports= router;
