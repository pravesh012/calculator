

import React, {useState, useEffect} from "react"

export default function Home() {

let [final, setfinal] = useState()
  //setting the inputs on the result bar//
const [showonTabValue, setshowonTabValue] = useState([]); //contains values numbers only
const [storesOrginalString, setstoresOrginalString] = useState([]);//contains array without numbers tooo
  //
const[hideDisplay, sethideDisplay] = useState(false);


  function screenoutput(event){
  
    //if clicked on background do nothingg.//
    if(event.target.classList.value == 'input-component-wrapper'){
      return;
    };

    let eventType  = event.target.innerText;
    //stores the whole string.//
    let fullStringResult = [...storesOrginalString, eventType];
    setstoresOrginalString(fullStringResult);


    
    //bottom if user clicks the background it won't show all the spans//
    switch(eventType){
      case 'C':
        setshowonTabValue([]);
        setstoresOrginalString([]);
        return;

      };/a/




     //showing the inputs to the screen//
      if(eventType != '='){
        setshowonTabValue([...showonTabValue, eventType]);
      }
      
      else{
        sethideDisplay(true);
        var unchangedData = [...storesOrginalString];
        unchangedData[unchangedData.length - 1] == '='&&
          unchangedData.pop();
        
          let fullStringofArr = storesOrginalString.join(""); 
          const RegularExpression = /±?\d+/;
          
          //input x//
          let getXStringResult = fullStringofArr.match(RegularExpression)[0];

          //input y//
          let getYStringResult = fullStringofArr.slice(getXStringResult.length);
          //operator
          let operator =  getYStringResult[0];

          if(getXStringResult[0] === '±' ){
            getXStringResult = getXStringResult.replace('±', '-');
            getXStringResult = parseFloat(getXStringResult);
          };

          if(getYStringResult[1] === '±'){
            getYStringResult = getYStringResult.replace('±', '-' );

            getYStringResult = getYStringResult.replace(getYStringResult[0], '');
            getYStringResult = parseFloat(getYStringResult);
          };

          

          switch(operator){
            case '+':
              const x = getXStringResult + getYStringResult;
              setfinal(x)
           
            
          }

        };





      }
      useEffect(()=>{
        console.log(final);
      })





  return (
    <>
      <main>
        <div className = 'calculator-main-background'>
          <div className="Text-result-calculator">
            { showonTabValue }
          </div>
          <div>result: { final }</div>

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
