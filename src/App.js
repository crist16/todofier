import React, {Component} from 'react';
import './App.css';
import Items from './items';
import Add from './add';


//Aqui iran todos los componentes


export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        items : [],
        
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  deleteItem(llave) {
    
    const filteredItem = this.state.items.filter(item => {
      return item.key !== llave;
    })
   this.setState({
     items : filteredItem
   })

}

  addItem(val) {
   const cadena = this.state.items.concat({
      text : val,
      key : Date.now(),
      
    })
    this.setState({
      items : cadena
    })
  
  }

  renderItem(items) {
    return <div><Items key={items.key} text={items.text} borrar = {() => this.deleteItem(items.key)} allItems = {this.state.items} llave={items.key} /></div>
  }

  render() {
    const objetos = this.state.items;
    const showObjetos = objetos.map(this.renderItem);
    return(
      <div className="app">
        <Add addItems= {this.addItem} />
        {showObjetos}            
      </div>
    )
  }
}