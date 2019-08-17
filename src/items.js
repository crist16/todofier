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
        this.taskDone = this.taskDone.bind(this);
    }

    changeCss() {

       var clases  = ["undone"];
       if (this.state.done) {
        clases = ["done"];
        
      }
      return clases.join("");
       
    }

    taskDone() {

        this.setState({           
            done : !this.state.done
        })
    }
    

    
    render() {

        return (
            <div className= {this.changeCss()}>
                <h3>{this.props.description}</h3>
                <button onClick={this.taskDone}>Done</button><button onClick={this.props.removeTodo}>Delete</button>
            </div>
        )
    }
}