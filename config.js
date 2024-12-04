const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "dtcrk3ccb",
  api_key: "526922663429135",
  api_secret: "seaW96O_AViRpZf_rKFQ6I2x_gQ"
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Thư mục trên Cloudinary
    allowedFormats: ["jpg", "png"], // Định dạng tệp được chấp nhận
    public_id: (req, file) => file.originalname // Tên tệp
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
