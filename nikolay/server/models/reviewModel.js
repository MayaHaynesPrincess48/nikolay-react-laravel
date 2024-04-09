const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    video: {
        type: String,
    },
    text: {
        type: String,
    },
    name: {
        type: String,
        require:true
    },
    position: {
        type: String,
        require:true
    },
    photo: {
        type: String,
        require:true
    }
}, {
    timestamps: true
}
);

const Review = mongoose.model("Review", reviewSchema);

module.exports= Review;