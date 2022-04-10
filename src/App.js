import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

export default function App() {


  
    return (
        <div>
            <Card imgsrc={Sdata[0].imgsrc}
sname={Sdata[0].sname}
 stitle={Sdata[0].stitle}
  link= {Sdata[0].link} /> 

<Card imgsrc={Sdata[1].imgsrc}
sname={Sdata[1].sname}
 stitle={Sdata[1].stitle}
  link= {Sdata[1].link} /> 

  <Card imgsrc={Sdata[2].imgsrc}
sname={Sdata[2].sname}
 stitle={Sdata[2].stitle}
  link= {Sdata[2].link} /> 

  <Card imgsrc={Sdata[3].imgsrc}
sname={Sdata[3].sname}
 stitle={Sdata[3].stitle}
  link= {Sdata[3].link} /> 

<Card imgsrc={Sdata[4].imgsrc}
sname={Sdata[4].sname}
 stitle={Sdata[4].stitle}
  link= {Sdata[4].link} /> 
        </div>
    )
}