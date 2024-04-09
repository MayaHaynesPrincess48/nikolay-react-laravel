const asyncHandler = require("../middleware/asyncHandler");
const Publication = require("../models/publicationModel");

const createPublication = asyncHandler(async (req, res) => {
  const { title, description, file, platform, view, like, favourite } = req.body;
  const publication = await Publication.create({title, description, file, platform, view, like, favourite});

  if (publication) {
    res.status(201).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
        favourite: publication.favourite
    });
  } else {
    res.status(400);
    throw new Error("Invalid publication data");
  }
});

const getPublication = asyncHandler(async (req, res) => {
  const publication = await Publication.find({});
  res.status(200).json(publication);
});

const getPublicationProfile = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);

  if (publication) {
    res.status(200).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
        favourite: publication.favourite
    });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

// const updatePublicationProfile = asyncHandler(async (req, res) => {
//   const publication = await Publication.findById(req.publication._id);
//   if (publication) {
//     publication.title = req.body.title || publication.title;
//     publication.description = req.body.description || publication.description;
//     publication.file = req.body.file || publication.file;
//     publication.platform = req.body.platform || publication.platform;
//     publication.view = req.body.view || publication.view;
//     publication.like = req.body.like || publication.like;
//     publication.favourite = req.body.favourite || publication.favourite;
    
//     const updatedPublication = await publication.save();
//     res.status(200).json({
//       _id: updatedPublication._id,
//         title: updatedPublication.title,
//         description: updatedPublication.description,
//         file: updatedPublication.file,
//         platform: updatedPublication.platform,
//         view: updatedPublication.view,
//         like: updatedPublication.like,
//         favourite: updatedPublication.favourite
//     });
//   } else {
//     res.status(404);
//     throw new Error("Publication not found");
//   }
// });

const getPublicationByID = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    res.status(200).json(publication);
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const deletePublication = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    await Publication.deleteOne({ _id: publication._id });
    res.status(200).json({ message: "Publication deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const updatePublication = asyncHandler(async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    publication.title = req.body.title || publication.title;
    publication.description = req.body.description || publication.description;
    publication.file = req.body.file || publication.file;
    publication.platform = req.body.platform || publication.platform;
    publication.view = req.body.view || publication.view;
    publication.like = req.body.like || publication.like;
    publication.favourite = req.body.favourite || publication.favourite;
    
    const updatedPublication = await publication.save();
    res.status(200).json({
      _id: updatedPublication._id,
        title: updatedPublication.title,
        description: updatedPublication.description,
        file: updatedPublication.file,
        platform: updatedPublication.platform,
        view: updatedPublication.view,
        like: updatedPublication.like,
        favourite: updatedPublication.favourite
    });
  } else {
    res.status(404);
    throw new Error("Publication not found");
  }
});

const views = asyncHandler(async (req, res) => {
  const view = await Publication.findById(req.params.id);
  if (view) {
    view.view = view.view+1;
    const updateView = await view.save();
    res.status(200).json({
      view:updateView.view
    })
  } else {
    res.status(400);
    throw new Error("view not found");
  }

})

const like = asyncHandler(async (req, res) => {
  const like = await Publication.findById(req.params.id);
  if (like) {
    like.like = like.like+1;
    const updateLike = await like.save();
    res.status(200).json({
      like:updateLike.like
    })
  } else {
    res.status(400);
    throw new Error("like not found");
  }

})

const unlike = asyncHandler(async (req, res) => {
  const unlike = await Publication.findById(req.params.id);
  if (unlike) {
    unlike.like = unlike.like-1;
    const updateunLike = await unlike.save();
    res.status(200).json({
      unlike:updateunLike.like
    })
  } else {
    res.status(400);
    throw new Error("unlike not found");
  }

})

const favourite = asyncHandler(async (req, res) => {
  const favourite = await Publication.findById(req.params.id);
  if (favourite) {
    favourite.favourite = favourite.favourite+1;
    const updatefavourite = await favourite.save();
    res.status(200).json({
      favourite:updatefavourite.favourite
    })
  } else {
    res.status(400);
    throw new Error("favourite not found");
  }

})

module.exports= {createPublication, getPublication, getPublicationByID, getPublicationProfile,deletePublication,updatePublication,views, like,unlike,favourite};
