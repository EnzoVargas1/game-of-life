import React, { Component, useCallback, useRef, useEffect} from 'react';
import Header from './HeaderComponent.js';
import produce from 'immer';
import { Button } from 'reactstrap';

const numRows = 61;
const numCols = 61;
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const initGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 'black'));
    }
    return rows;
}

class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            running : true,
            grid: initGrid(),
            generation: 0
        };
        this.runningRef = React.createRef(this.state.running);
        this.runningRef.current = this.state.running;
        this.runSimulation = this.runSimulation.bind(this);
       
    }

    updateGrid = (i, j) => {
        let copy = produce(this.state.grid, copyGrid => {

            copyGrid[i][j] = this.state.grid[i][j] == 'black' ? 'green' : 'black';
        });
        this.setState({
            grid: copy
        })
    }

    resetGrid = () => {
        let copy = produce(this.state.grid, copyGrid => {
            for(let i = 0; i < numRows; i++){
                for(let j = 0; j < numCols; j++){
                    copyGrid[i][j] = "black";
                }
            }
        });
        this.setState({
            grid: copy
        })
    }

    runSimulation = () => {
       //let running = this.state.run;
       if(this.runningRef.current == false){
           return;
        }

       let gridCopy = produce(this.state.grid, copy => {

       let neighbors = 0;
       for(let i = 0; i < numRows; i++){
       for(let j = 0; j < numCols; j++){
      
      operations.forEach(([x, y]) => {
        const newI = x+i;
        const newJ = y+j;

        if((newI >= 0 && newI < numRows) && (newJ >= 0 && newJ < numCols)){
           if(this.state.grid[newI][newJ] == "green"){neighbors++;}
        }
      })

      if(neighbors < 2 || neighbors > 3){
        copy[i][j] = "black";
      }
      else if(neighbors == 3 && this.state.grid[i][j] == "black"){
          copy[i][j] = "green";
      }
      neighbors = 0;
     }
     }});

       
     //console.log("it computed");
     this.setState({
         grid:gridCopy,
         generation: this.state.generation+1
     });
     //console.log(this.state.grid);

     setTimeout(this.runSimulation, 500);
    }

    randomize = () => {
        let copy = produce(this.state.grid, copyGrid => {
            let r = Math.random() * ((1 - 0) + 1);
            for(let i = 0; i < numRows; i++){
                for(let j = 0; j < numCols; j++){
                    r = Math.floor(Math.random() * (1 + 1));
                    copyGrid[i][j] = r == 1 ? "green" : "black";
                }
            }
        });
        this.setState({
            grid: copy
        })
    }
    
    
     render(){
         //console.log(this.state.grid);
         return(
            <div>
             <Header/>
             <div style={{backgroundColor: "black"}}>
             <Button style={{backgroundColor: "green"}} color='black' onClick={() => {
                 this.setState({
                     running: !this.state.running
                 });
               //  console.log(this.state.running);
                if(this.state.running == true){
                    this.runningRef.current = true;
                    this.runSimulation();
                }else{
                    this.runningRef.current = false;
                }
             }}>{this.state.running ? "start" : "stop"}</Button>

              <Button style={{backgroundColor: "green"}} color='black' 
              onClick={() => {this.resetGrid()}}>reset</Button>

              <Button style={{backgroundColor: "green"}} color='black' 
              onClick={() => {this.randomize()}}>Random</Button>
             <br/>
             <br/>
             </div>
             <div>
             <div style={{display:'grid', gridTemplateColumns:`repeat(${numCols}, 25px)`}}>
             {this.state.grid.map((row, i) => 
                 row.map((cell, j) => (
                     //console.log(cell);
                         <div key={`${i}-${j}`}
                         style={{border: ' 1px solid green', width:'25px', 
                         height:'25px', backgroundColor:cell}}
                         onClick={() => {this.updateGrid(i, j)}}>
                         </div>
                   ))
                 )}
             </div>
             </div>
             
             </div>
         );
     }
}

export default Main;