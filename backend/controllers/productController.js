import Product from "../model/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({
      message: "Product created",
      data: product,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Updated",
      data: product,
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};

export const getproductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Success",
      data: product[0],
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
      data: product[0],
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};
