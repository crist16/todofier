import React, { Component } from "react";
import "./App.css";
import Items from "./items";
import Add from "./add";

export default class Maintodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    deleteItem(llave) {
        const filteredItem = this.state.items.filter(item => {
            return item.key !== llave;
        });
        this.setState({
            items: filteredItem
        });
    }

    addItem(val) {
        const cadena = this.state.items.concat({
            text: val,
            key: Date.now()
        });
        console.log(this.state.items);
        
        this.setState({
            items: cadena
        });
    }

    renderItems() {
        console.log(this.state.items);
        
        return this.state.items.map(description => (
          <Items
            key={description.key}
            description={description.text}
            removeTodo={() => this.deleteItem(description.key)}
          />
        ));
      }

    // renderItem(items) {
    //     return (
    //         <div>
    //             <Items
    //                 key={items.key}
    //                 text={items.text}
    //                 borrar={() => this.deleteItem(items.key)}
    //                 allItems={this.state.items}
    //                 llave={items.key}
    //             />
    //         </div>
    //     );
    // }

    render() {
       
        return (
            <div className="app">
                <Add addItems={this.addItem} />
                {this.renderItems()}
            </div>
        );
    }
}
