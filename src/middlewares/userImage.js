const multer = require("multer")


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      
        cb(null, 'userimages')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
    },


})


const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
       
        const fileSize = parseInt(req.headers["content-length"]);
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            if ((fileSize / 1024) > 340) {
               cb(new Error('Please use less than 200 kb'), true);
            } else {
               cb(null, true);
            }
        } else {
            cb(new Error('Please use JPG,JPEG,PNG'), true);
        }


    }

})

const uploadSingleImage = upload.single('images');

module.exports.userImage = uploadSingleImage;