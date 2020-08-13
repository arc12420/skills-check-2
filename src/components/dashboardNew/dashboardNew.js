import React, { Component } from "react";
import axios from "axios";
import ProductNew from "../productNew/productNew";

class DashboardNew extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    axios.get("/api/products").then((res) => {
      console.log(res.data);
      this.setState({
        products: res.data,
      });
    });
  };

  dlt = (id) => {
    axios.delete(`/api/products/${id}`).then((res) => {
      this.getProducts();
    });
  };

  render() {
    const arr = this.state.products.map((element, index) => {
      return (
        <div>
          <ProductNew product={element} dlt={this.dlt} />
        </div>
      );
    });
    return <div>{arr}</div>;
  }
}

export default DashboardNew;
