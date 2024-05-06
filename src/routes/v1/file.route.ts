import express, { Router } from 'express';
import  upload from '../../multer';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { imageController, imageValidation } from '../../modules/image';

const router: Router = express.Router();

router
  .route('/')
  .post(auth('manageImages'), upload.single('image'), validate(imageValidation.createImage), imageController.createImage)

router
  .route('/:filename')
  .get(validate(imageValidation.getImages), imageController.getImages);

export default router;