import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Grid from './GridComponent.js';
import Cell from './CellComponent.js';

class Main extends Component{

    constructor(props){
        super(props);
    }

     render(){
         return(
            <div>
             <Header/>
             <Grid/>
             </div>
         );
     }
}

export default Main;