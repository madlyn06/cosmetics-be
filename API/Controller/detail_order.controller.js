const Detail_Order = require("../../Models/detail_order");
const Products = require("../../Models/product");

// Hiển thị chi tiết hóa đơn
// Phương thức GET
module.exports.detail = async (req, res) => {
  const id_order = req.params.id;

  const detail_order = await Detail_Order.find({ id_order: id_order }).populate(
    "id_product"
  );

  res.json(detail_order);
};

// Phuong Thuc Post
module.exports.post_detail_order = async (req, res) => {
  const detail_order = await Detail_Order.create(req.body);

  const product = await Products.findOne({ _id: req.body.id_product });
  if (product.amount < req.body.count) {
    res.json({ msg: "Sản phẩm không đủ" });
  } else {
    product.amount -= req.body.count;
    product.save();
    res.send("Thanh Cong");
  }
};
