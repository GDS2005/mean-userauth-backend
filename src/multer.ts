import multer from 'multer';

// Configure Multer
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (_req, _file, cb) {
        cb(null, _file.originalname);
    }
});

const upload = multer({ storage: storage });

export default upload;