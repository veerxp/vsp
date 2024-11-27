import React from 'react';
import "./App.css"
 function Student (props){
  return(
    <div>
      <h1>
        Name:{props.name}
      </h1>
      <h2>
        Age:{props.age}
      </h2>
    </div>
  )
 }
function yus(){
  return(
    <div class="content">
      <Student name={"Veer"} age={18}/>
    </div>
  )
}
export default yus;