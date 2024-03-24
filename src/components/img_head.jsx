import React from "react";


const ImgHead = ({img, head_text, main_text}) => {
    return (
        <div className='main-div-img'>
            <img
            className='main-img' 
            src= {img}>
            </img>
            <div className='img-text img-first-text'>{head_text}</div>
            <div className='img-text img-second-text'>{main_text}</div>
        </div>
    );
}

export default ImgHead;