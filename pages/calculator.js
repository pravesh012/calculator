


import React, {useState, useEffect} from "react"

export default function Home() {
const [showresult, setshowresult] = useState(false);
const [final, setfinal] = useState(0);
  //setting the inputs on the result bar//
const [showonTabValue, setshowonTabValue] = useState([]); //contains values numbers only
const [storesOrginalString, setstoresOrginalString] = useState([]);//contains array without numbers too
  //


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
        setfinal(0);
        setshowresult(false);
        return;

      };




     //showing the inputs to the screen//
      if(eventType != '='){
        
        if(eventType === '±'){
          setshowonTabValue((previous)=>{
            return [...showonTabValue, '-'];
          });
        }
        else{
          setshowonTabValue((previous)=>{
            return [...showonTabValue, eventType];
          });
        }

      }
      
      
      else{
        
        var unchangedData = [...storesOrginalString];
        unchangedData[unchangedData.length - 1] == '='&&
          unchangedData.pop();
        
          let fullStringofArr = storesOrginalString.join(""); 
          const RegularExpression = /±?\d+/;

          //input x//
          let getXStringResult = fullStringofArr.match(RegularExpression)[0];


          //input y//
          let getYStringResult = fullStringofArr.slice(getXStringResult.length);

          
          //if the second input has negitive then index at 0 else index at 1;//

        

          if(getXStringResult[0] === '±' ){
            
            getXStringResult = getXStringResult.replace('±', '-');
            getXStringResult = parseFloat(getXStringResult);
          }
          else{
            getXStringResult = parseFloat(getXStringResult);
          };


          if(getYStringResult[1] === '±'){
            var operator = getYStringResult[1];
            getYStringResult = getYStringResult.replace('±', '-' );

            getYStringResult = getYStringResult.replace(getYStringResult[0], '');
            getYStringResult = parseFloat(getYStringResult);
          }
          else{
            operator = getYStringResult[0];
            getYStringResult = getYStringResult.slice(1);


            getYStringResult = parseFloat(getYStringResult);

          }

          

          switch(operator){
            case '+':
              
              setfinal((previous) => {
                let finalValue  = getXStringResult + getYStringResult;
                return previous += finalValue;
              });
            break;
            case '-':
              setfinal((previous) => {
                let finalValue  = getXStringResult - getYStringResult;

                return previous += finalValue;
              });
            break;
            case 'x':
              setfinal((previous) => {
                let finalValue  = getXStringResult * getYStringResult;
                return previous += finalValue;
              });
            break;
            case '÷':
              setfinal((previous) => {
                let finalValue  = getXStringResult /getYStringResult;
                return previous += finalValue;
              });
            break;

            case '%':
              setfinal((previous) => {
                let finalValue  = getXStringResult % getYStringResult;
                return previous += finalValue;
              });
            break;



            
          }
          setshowresult((previous) =>{
            return true;
          })
          
        };


      }




  return (
    <>
      <main>
        <div className = 'calculator-main-background'>
          <div className="Text-result-calculator">
            { showresult ? final : showonTabValue }
          </div>

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
