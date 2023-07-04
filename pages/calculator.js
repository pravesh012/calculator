import React, {useState, useEffect} from "react"
import {deleteArray} from './function_page';

export default function Home() {



  //setting the inputs on the result bar//
  let [showonTabValue, setshowonTabValue] = useState([]); //contains values numbers only
  let [storesOrginalString, setstoresOrginalString] = useState([]);//contains array without numbers tooo
  //
  


  function screenoutput(event){
    const eventType  = event.target.innerText;
    //bottom if user clicks the background it won't show all the spans//
    

    switch(eventType){
      case event.target.classList.value == 'input-component-wrapper':
      return;
      case 'C':
        setshowonTabValue([]);
        setstoresOrginalString([]);
        return;
    };
    //need the whole characters//
    let fullStringResult = [...storesOrginalString, eventType];
    setstoresOrginalString(fullStringResult);


    //if its a number or . //
     if(!isNaN(Number(eventType)) || eventType ==='.'){
      const result = [...showonTabValue, eventType];
      setshowonTabValue(result);
      

    }

    else{
      
    }
    



  }
  



  return (
    <>
      <main>
        <div className = 'calculator-main-background'>
          <div className="Text-result-calculator">{showonTabValue}</div>
          <div className = "input-component-wrapper" onClick = {screenoutput} >
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>÷</span>
          <span>±</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>x</span>
          <span>√</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>-</span>
          <span>%</span>
          <span>0</span>
          <span>.</span>
          <span>C</span>
          <span>+</span>
          <span>=</span>


          </div>
        </div>
      </main>
    </>
  )
  }
