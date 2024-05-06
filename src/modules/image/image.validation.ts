import Joi from 'joi';

export const createImage = Joi.object({
    image: Joi.any()
      .required()
      .custom((value, helpers) => {
        if (!value) {
          return helpers.error('any.required');
        }
        if (!value.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return helpers.error('file.invalidExtension');
        }
        return value;
      })
      .messages({
        'any.required': 'Please upload an image file',
        'file.invalidExtension': 'Only JPG, JPEG, and PNG files are allowed',
    }),
});

export const getImages = Joi.object({
    imageName: Joi.string().required(),
}).options({ abortEarly: false });