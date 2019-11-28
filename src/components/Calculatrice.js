import React, { Component } from 'react';

class Calculatrice extends Component {

    render() {
        return (
            <div class="calculatrice">
                <button onClick={this.props.updateSaisie}>0</button>
                <button onClick={this.props.updateSaisie}>.</button>
                <button onClick={this.props.signePositifNegatif}>±</button>
                <button onClick={this.props.clear}>CLEAR</button>
                <button onClick={this.props.swap}>SWAP</button>
                
                <button onClick={this.props.updateSaisie}>1</button>
                <button onClick={this.props.updateSaisie}>2</button>
                <button onClick={this.props.updateSaisie}>3</button>
                <button onClick={this.props.multiplication}>*</button>
                <button onClick={this.props.drop}>DROP</button>
                
                <button onClick={this.props.updateSaisie}>4</button>
                <button onClick={this.props.updateSaisie}>5</button>
                <button onClick={this.props.updateSaisie}>6</button>
                <button onClick={this.props.soustraction}>-</button>
                <button class="enter" onClick={this.props.addToPile}>ENTER</button>
                
                <button onClick={this.props.updateSaisie}>7</button>
                <button onClick={this.props.updateSaisie}>8</button>
                <button onClick={this.props.updateSaisie}>9</button>
                <button onClick={this.props.addition}>+</button>
            </div>
        )
    }

}

export default Calculatrice;