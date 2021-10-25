import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-product/${id}`);
      getProducts();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="table-container p-5">
      <NavLink
        to="/create"
        className="button is-primary is-float-right is-pulled-right m-5"
      >
        Insert
      </NavLink>
      <table className="table is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <div className="group">
                    <NavLink
                      to={`/edit/${product.id}`}
                      className="button is-primary is-float-right is-pulled-right "
                    >
                      Edit
                    </NavLink>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="button is-danger is-float-right is-pulled-right "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
