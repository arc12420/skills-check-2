import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import routes from './routes';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Axios from 'axios';


class App extends Component{
  constructor(){
    super();
     this.state={
      id:"",
      name:"",
      price:"",
      image_url:""
      
    }
  }

  componentDidMount() {
    this.getProducts()
  };

  getProducts = () => {
    Axios.get('/api/products')
    .then( res => {
      this.setState({        
        name: res.data,
        price: res.data,
        image_url: res.data
      })
    }
    ).catch ( err => console.log(err))
  }

  addProduct = (id, name, price, image_url) => {
    Axios.post(`/api/products`, {id,name, price, image_url})
    .then( res => {
      this.setState({
        id: res.data,
        name: res.data,
        price: res.data,
        image_url: res.data
      })
    }
    ).catch (err => console.log(err))
  }

  updateProduct = (id, name, price, image_url) => {
    Axios.put(`/api/products/${this.state.id}`)
    .then(res => {
      this.setState({
        id: res.data,
        name: res.data,
        price: res.data,
        image_url: res.data
      })
    }
    ).catch (err => console.log(err))
  }
  deleteProduct = (id, name, price, image_url) => {
    Axios.put(`/api/products/${this.state.id}`)
    .then(res => {
      this.setState({
        id: res.data,
        name: res.data,
        price: res.data,
        image_url: res.data
      })
    }
    ).catch (err => console.log(err))
  }

  getOneProduct = (id, name, price, image_url) => {
    Axios.get(`/api/single/product/${this.state.id}`)
    .then(res => {
      this.setState({
        id: res.data,
        name: res.data,
        price: res.data,
        image_url: res.data
      })
    }
    ).catch (err => console.log(err))
  }

  
  
  render(){
        return (
         <div className="App">
          <header className="App-header">
            {/* <Dashboard getProducts={this.getProducts} getOneProduct={this.getOneProduct} deleteProduct={this.deleteProduct} updateProduct={this.updateProduct}/> */}
           <Header/>
           <Form addProduct={this.addProduct}/>
           HELLO
           {routes}
        </header>
      </div>
    );
  }
};
export default App;
