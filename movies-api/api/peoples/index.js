import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPeople, getPeopleImages, getPeoples } from '../tmdb-api';

const router = express.Router(); 

router.get('/popular', asyncHandler( async(req, res) => {
    const peoples = await getPeoples();
    res.status(200).json(peoples);
}));

router.get('/:id', asyncHandler( async(req, res,) => {
  console.log("a");
  const id = parseInt(req.params.id);
  const people = await getPeople(id);
  res.status(200).json(people);
}));


router.get('/:id/images', asyncHandler( async(req, res,) => {
  const images = await getPeopleImages(req.params.id);
  res.status(200).json(images);
}));

export default router;