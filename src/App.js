import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Items from './Items'



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
        <Header title="Shopping Cart" />
        <div className="item-title">
          <p>Items In Cart - Total: 0</p>
        </div>

        {this.state.items.map( item => 
          <Items
            name={item.name}
            price={item.price}
            id={item.id}
            removeItem={this.removeItem}
          />
          
        )}

      </div>
    );
  }
}

export default App;
