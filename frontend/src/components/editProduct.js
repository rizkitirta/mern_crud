import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function EditProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/update-product/${id}`, {
        title: title,
        price: price,
      });
      history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const getProductById = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/product/${id}`);
      console.log(res);
      setTitle(res.data.data.title);
      setPrice(res.data.data.price);
    } catch (e) {}
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="container mb-5">
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Product Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary is-float-right is-pulled-right">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
