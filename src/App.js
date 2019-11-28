import React, { Component } from 'react';
import './App.css';
import Calculatrice from './components/Calculatrice';
import Ecran from './components/Ecran';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saisies: [],
      pile: []
    }
  }

  /**
   * Fonction qui va récupérer ce qui est saisie
   */
  updateSaisie = (e) => {
    let number = e.target.textContent;
    this.setState(state => {
      const saisies = state.saisies.concat(number);
      return {
        saisies
      };
    });
  }

  /**
   * Fonction qui va ajouter la saisie à la pile
   */
  addToPile = () => {
    // Si le tableau saisies est à au moins une valeur
    // On peut rajouter le contenu à la pile
    if( this.state.saisies.length > 0 ) {
      let laSaisie = null;
      this.state.saisies.forEach(saisie => {
        if( laSaisie == null ) {
          laSaisie = saisie;
        } else {
          laSaisie += saisie;
        }
      });
      this.setState(state => {
        const pile = state.pile.concat(parseFloat(laSaisie));
        return {
          pile
        };
      });
      this.setState({ saisies: [] });
    // Sinon on ne fait rien
    } else {
      console.log('tableau vide');
    }
  }

  /**
   * Listes des méthodes pour la calculatrice
   */

  // Btn addition
  addition = () => {

    if( this.state.pile.length > 1 ) {
      let dernierElement = this.state.pile[this.state.pile.length - 1];
      let avantDernierElement = this.state.pile[this.state.pile.length - 2];

      let res = avantDernierElement + dernierElement;

      let tempPile = this.state.pile;

      tempPile.splice(-2);
      tempPile.push(res);

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }
  }

  // Btn soustraction
  soustraction = () => {

    if( this.state.pile.length > 1 ) {
      let dernierElement = this.state.pile[this.state.pile.length - 1];
      let avantDernierElement = this.state.pile[this.state.pile.length - 2];

      let res = avantDernierElement - dernierElement;

      let tempPile = this.state.pile;

      tempPile.splice(-2);
      tempPile.push(res);

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }
  }

  // Btn multiplication
  multiplication = () => {

    if( this.state.pile.length > 1 ) {
      let dernierElement = this.state.pile[this.state.pile.length - 1];
      let avantDernierElement = this.state.pile[this.state.pile.length - 2];

      let res = avantDernierElement * dernierElement;

      let tempPile = this.state.pile;

      tempPile.splice(-2);
      tempPile.push(res);

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }
    
  }

  // Btn signePositifNegatif
  signePositifNegatif = () => {

    if( this.state.pile.length > 0 ) {
      let dernierElement = this.state.pile[this.state.pile.length - 1];

      let res = dernierElement * -1;

      let tempPile = this.state.pile;

      tempPile.pop();
      tempPile.push(res);

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }

  }

  // Btn drop
  drop = () => {

    if( this.state.saisies.length > 0 ) {
      let tempSaisies = this.state.saisies;
      tempSaisies.pop();

      this.setState(state => {
        const saisies = tempSaisies;
        return {
          saisies
        };
      });
    } else if( this.state.pile.length > 0 ) {
      let tempPile = this.state.pile;
      tempPile.pop();

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }
    
  }

  // Btn swap
  swap = () => {

    if( this.state.pile.length > 0 ) {
      let dernierElement = this.state.pile[this.state.pile.length - 1];
      let avantDernierElement = this.state.pile[this.state.pile.length - 2];

      let tempPile = this.state.pile;

      tempPile[this.state.pile.length - 2] = dernierElement;
      tempPile[this.state.pile.length - 1] = avantDernierElement;

      this.setState(state => {
        const pile = tempPile;
        return {
          pile
        };
      });
    }
    
  }

  // Btn clear
  clear = () => {

    if( this.state.saisies.length > 0 ) {
      this.setState({ saisies: [] });
    }

    if( this.state.pile.length > 0 ) {
      this.setState({ pile: [] });
    }
    
  }

  render() {
    return (
      <div class="app">
        {/* Component Ecran */}
        <Ecran 
          pile={this.state.pile}
          saisies={this.state.saisies}
        />

        {/* Component Calculatrice */}
        <Calculatrice 
          updateSaisie={this.updateSaisie} 
          addToPile={this.addToPile}
          addition={this.addition}
          soustraction={this.soustraction}
          multiplication={this.multiplication}
          signePositifNegatif={this.signePositifNegatif}
          drop={this.drop}
          swap={this.swap}
          clear={this.clear}
        />
      </div>
    )
  }
  
}

export default App;
