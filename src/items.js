import React, { Component } from 'react';
import './items.css';
import './buttons.css';

export default class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
            done: false


        }
        this.changeCss = this.changeCss.bind(this);
        this.borrar_two = this.borrar_two.bind(this);

    }

    changeCss(items, llave) {

        items.forEach(element => {
            if (element.key === llave) {
                console.log("entro");
                this.setState({

                    done: !this.state.done
                })
            }
        });
    }

    borrar_two() {

        this.props.borrar()

    }




    render() {

        return (
            <div className={this.state.done ? "done" : "undone"}>
                <h3>{this.props.text}</h3>
                <button onClick={() => this.changeCss(this.props.allItems, this.props.llave)}>Done</button><button onClick={this.props.borrar}>Delete</button>
            </div>


        )
    }
}