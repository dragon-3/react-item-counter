import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Items from './Items';
import Products from './Products';



class App extends Component {

  state = {
    items: [
      {
        name: "Gucci bag",
        price: "$" + 1500,
        id: 1
      },
      {
        name: "Air Jordan 3",
        price: "$" + 200,
        id: 2
      },
      {
        name: "Nike sweat shirt",
        price: "$" + 130,
        id: 3
      },
      {
        name: "iPhone X",
        price: "$" + 1100,
        id: 4
      }
    ],

    products: [
      {
        name: "Gucci bag",
        price: "$" + 1500,
        id: 1
      },
      {
        name: "Air Jordan 3",
        price: "$" + 200,
        id: 2
      },
      {
        name: "Nike sweat shirt",
        price: "$" + 130,
        id: 3
      },
      {
        name: "iPhone X",
        price: "$" + 1100,
        id: 4
      },
      {
        name: "Disney's Toy Story DVD",
        price: "$" + 40,
        id: 5
      },
      {
        name: "Spider-Man 2 DVD",
        price: "$" + 35,
        id: 6
      },
      {
        name: "Donald Duck t-shirt",
        price: "$" + 70,
        id: 7
      }
    ]
  };

  removeItem = (id) => {
    this.setState( prevState => {
      return {
        items: prevState.items.filter(p => p.id !== id)
      };
    });
  }
  
  
  

  render() {
    return (
      <div>
        <Header title="Shopping Cart" totalItems={this.state.items.length} />
        

        {this.state.items.map( item => 
          <Items
            name={item.name}
            price={item.price}
            id={item.id}
            removeItem={this.removeItem}
          />
        )}

        <p style={{marginTop: '100px', fontSize: '26px', marginLeft: '3%'}}>Products</p>

        {this.state.products.map( product => 
          <Products
            name={product.name}
            price={product.price}
            id={product.id}
          />
        )}

      </div>
    );
  }
}

export default App;
