const multer = require('multer');
const mimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

const storage = multer.diskStorage({
    destination: './uploads/img',
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype && mimeTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const uploads = multer({ storage: storage, fileFilter: fileFilter, limits: {
    fileSize: 1024 * 1024 * 5
} });


// module.exports = (model, cover = null) => {
//     console.log(cover)
//     if(!cover) return;
    

//     if(cover && mimeTypes.includes(cover.mimetype)) {
//         console.log('OK')
//         model.image = `data:${cover.mimetype};charset=utf-8;base64,${cover.buffer.toString('base64')}`;
//     }
// }

module.exports = uploads;