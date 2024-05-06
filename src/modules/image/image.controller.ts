import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import path from 'path';
import { fileURLToPath } from 'url';
import fs  from 'fs';


// Get the filename of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the main directory
const __dirname = path.dirname(path.dirname(__filename));

export const createImage = catchAsync(async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
  
    return res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });

});

export const getImages = catchAsync(async (req: Request, res: Response) => {
    const filename = (req.params['filename'] as string) || '';
    // Construct the path to the image file
    const imagePath = path.join(__dirname, '../../uploads', filename);

    res.sendFile(imagePath);
});

export const deleteImage = (filename: string, callback: (error: Error | null) => void) => {
    const imagePath = path.join(__dirname, '../../uploads', filename);

    // Check if the file exists
    fs.access(imagePath, fs.constants.F_OK, (err: NodeJS.ErrnoException | null) => {
        if (err) {
            // If the file doesn't exist, invoke the callback with an error
            console.log(imagePath);
            callback(new Error("File not found"));
        } else {
            // Delete the file
            fs.unlink(imagePath, (err: NodeJS.ErrnoException | null) => {
                if (err) {
                    // If an error occurs while deleting the file, invoke the callback with the error
                    callback(err);
                } else {
                    // If the file is deleted successfully, invoke the callback with no error
                    callback(null);
                }
            });
        }
    });
};
