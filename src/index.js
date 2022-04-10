import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from "./Sdata";
import Card  from './Card';

function ncard(val){

    return(
        <>
        <Card imgsrc={val.imgsrc}
sname={val.sname}
 stitle={val.stitle}
  link= {val.link} /> 
        </>
    );
}

ReactDOM.render(
<>

<h1 className='heading'>NETFLIX SERIES</h1>
{Sdata.map(ncard)}

</>
,
document.getElementById('root')
);



