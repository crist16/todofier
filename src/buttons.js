import React,{Component} from 'react';
import './buttons.css';

export default class Buttons extends Component {
  
constructor() {
    super();
    this.cambiando = this.cambiando.bind(this);
}
    cambiando() {
        this.props.cambia();
    }
    

    render() {
        return(
            <div>
                <button onClick={this.cambiando}>Done</button><button onClick={this.props.elimina}>Delete</button>
            </div>
        )
    }
}
