import React, { Component } from 'react';

class Ecran extends Component {

    render() {
        return (
            <div class="ecran">
                <div>
                    {this.props.pile.map((item) => 
                        <span>{item}<br/></span>
                    )}
                </div>

                <div>
                    {this.props.saisies.map((item) => 
                        <span>{item}</span> 
                    )}
                    <span class="blink-me">_</span>
                </div>
            </div>
        )
    }

}

export default Ecran;