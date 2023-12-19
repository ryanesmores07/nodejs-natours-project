const express = require('express');
const {
  getAllReviews,
  createNewReview,
  setTourUserIds,
  updateReview,
  getReview,
  
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');
const { deleteReview } = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

// POST /tour/234fad4/reviews
// POST /reviews

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setTourUserIds, createNewReview);

router
  .route('/:id')
  .get(getReview)
  .delete(restrictTo('admin', 'user'), deleteReview)
  .patch(restrictTo('admin', 'user'), updateReview);
  
module.exports = router;
