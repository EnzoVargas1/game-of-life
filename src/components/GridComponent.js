import React, { useState, useEffect } from 'react';
import {Button } from 'reactstrap';
import produce from 'immer';
import Cell from './CellComponent';

const Grid = (props) => {

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

const[grid, setGrid] = useState(() => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
       rows.push(Array.from(Array(numCols), () => 'black'));
   }
   return rows;
});

const[start, setStart] = useState(false);

function update(){
  let newGrid = [];
  let newRows = [];
  let neighbors = 0;

  for(let i = 0; i < numRows; i++){
    newRows.push(Array.from(Array(numCols), () => "black"));
  }
  for(let i = 0; i < numCols; i++){
    newGrid.push(newRows);
  }

  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < numCols; j++){
      
      operations.forEach(([x, y]) => {
        const newI = x+i;
        const newJ = y+j;

        if((newI >= 0 && newI < numRows) && (newJ >= 0 && newJ < numCols)){
           if(grid[newI][newJ] == "green")neighbors++;
        }
      })

      if(neighbors < 2 || neighbors > 3){
        newGrid[i][j] = "black";
      }
      else if(neighbors === 3 && grid[i][j] == "black"){
        newGrid[i][j] = "green";
      }
      neighbors = 0;
    }
  }
}



 //console.log(grid);
 return(
    <div style={{display:'grid', gridTemplateColumns:`repeat(${numCols}, 25px)`}}>
    {grid.map((row, i) => {
      return(
        <div key={i}>
          {row.map((j) => {
            //update();
            return(
            <Cell color = {j}/>
            );
          })}
        </div>
      );

    })}
    <Button size='lg' onClick={() => {setStart(!start); console.log(update());}}>start</Button>
    </div>
);

}

export default Grid;