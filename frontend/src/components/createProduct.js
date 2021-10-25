import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/create-product", {
        title: title,
        price: price,
      });
      history.push("/");
    } catch (e) {}
  };

  return (
    <div className="container mb-5">
      <form onSubmit={saveProduct}>
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
