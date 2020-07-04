import React from 'react';
import './Slider.css'
const Slider = ({bars,setBars,resetArray}) => {
    return (
        <div className="center">

            <input name="range" type="range" min="2" max="75" step="1" orient="vertical" id="range-slide" onChange={(e)=>{
                setBars(e.target.value)
                resetArray()
            }} defaultValue={bars}/>
            <output htmlFor="range" onforminput="value = range.valueAsNumber;"></output>

        </div>
    );
};

export default Slider;