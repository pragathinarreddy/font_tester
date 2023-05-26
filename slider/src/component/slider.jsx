import React,{useState} from "react";


function FontSizeSlider(){
    const[fontSize , setFontSize]=useState(16);
    const[text,setText] = useState('');

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value)
    }


    const handleTextChange = (event)=>{
        setText(event.target.value)
    } 

    return(
        <>
        <div>
            <input type="email"
            value={text}
            placeholder="Enter your email"
            onChange={handleTextChange}
                 style={{fontSize : `${fontSize}px`}} 
             />
        </div>
            <div>
                <input
                type = "range"
                min = "12"
                max = "36"
                value = {fontSize}
                onChange = {handleFontSizeChange}
                />
            </div>
        </>
    )
}
export default FontSizeSlider