import React, { useState, useEffect } from 'react';
import { Col} from 'reactstrap';
import Box from '@material-ui/core/Box';

const Cell = (props) => {
    const[color, setColor] = useState(props.color);
   // const[clicked, setClicked] = useState(false);

   function changeColor(){
       if(color == "black"){
           setColor("green");
       }
       else{
           setColor("black");
       }
   }

    return(
        <div onClick={() => changeColor()}>
        <div style={{border: ' 1px solid green', width:'25px', height:'25px', backgroundColor:color}} >
       
        </div>
        </div>
    );
}

export default Cell;