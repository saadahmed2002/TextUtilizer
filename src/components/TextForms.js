import React,{useState} from 'react'
export default function TextForms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("On Chnaged"+text)
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
        
      }
      const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        console.log("On Chnaged"+text)
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
        
      }
      const handleClearClick = ()=>{
        console.log("On Chnaged"+text)
        setText("")
        props.showAlert("Cleared!","success");
        
      }
      const handleOnChange = (event)=>{
        console.log("On Chnaged")
        setText(event.target.value)
        
      }
      const handleCopy = ()=>{
        let text = document.getElementById('My-Box')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied!","success");
      }
      const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!","success");
    }
    const[text,setText] = useState('')
    //Wrong way to update variable
    //text =" I am Saad Ahmed"
    // setText = " I am Saad Ahmed";
 
 //Correct way to update is:
//  setText("I am Saad Ahmed"); // always use this change variable.
    return (<>
    
<div style={{color:props.mode==='light' ? 'black':'white'}} className="container">
    <h1 >{props.heading}</h1>
    <div className="mb-3">

  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light' ? 'white':'grey',color:props.mode==='light' ? 'black':'white',fontSize:'2rem'}} onChange={handleOnChange} id="My-Box" rows="6"></textarea>
    </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container my-2" style={{color:props.mode==='light' ? 'black':'white'}}>
  <h2>Your text Summary</h2>
  <p>{text.split(" ").length} words,{text.length} characters</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text:"Enter Something to preview here"}</p>
</div>
    </>
  )
}
