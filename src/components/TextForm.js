import React, {useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');
  // const [textColor, setTextColor] = useState('black');

    const handelUpClick = () => {
        // console.log('upperCase wan clicked' + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upper case', 'success');
    }

    const handelLowerClick = () => {
      // console.log('upperCase wan clicked' + text)
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lower case', 'success');
  }

    const handelClearClick = () => {
      // console.log('upperCase wan clicked' + text)
      let newText = '';
      setText(newText);
  }
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra spaces removed', 'success');
  };

  const handleCapitalizeAfterPeriod = () => {
    let newText = text.replace(/(\.\s*\w)/g, (match) => match.toUpperCase());
    setText(newText);
    props.showAlert('First letter after period capitalized', 'success');
  };

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    
    // text = 'new text';  wrong way to change text use setText function given in syntex
    // setText('new text');   correct way to change text
  return (
    <>
       <div className='container1' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <form>

          <div className="form-group">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handelOnChange} id="myBox" rows="8"></textarea>
          </div>
         </form>
         <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>Conert to uppercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handelLowerClick}>Conert to LowerCase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handelClearClick}>Clear</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Remove extra space</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeAfterPeriod}>Remove extra space</button>
    </div>

    <div className="container2 my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length } time to read words</p> */}

       <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} minutes to read
        </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
