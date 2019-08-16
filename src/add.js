import React, { Component } from 'react';
import './add.css';

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.addingItems = this.addingItems.bind(this);
    }

    addingItems(e) {

        if (this._input.value !== "") {
            const val = this._input.value;

            this.props.addItems(val);
            this._input.focus();
            this._input.value = "";            
        }        
        e.preventDefault();        
    }

    render() {
        return (
            <div className="item">
                <form onSubmit={this.addingItems}>
                    <input ref={(a) => this._input = a} type="text" /><button>Add</button>
                </form>

            </div>

        )
    }
}
