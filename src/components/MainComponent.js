import React, { Component } from 'react';
import Header from './HeaderComponent.js';

class Main extends Component{

    constructor(props){
        super(props);
    }

     render(){
         return(
            <div>
             <Header/>
             </div>
         );
     }
}

export default Main;