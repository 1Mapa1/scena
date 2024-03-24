import React from "react";

const MinTheater = ({main_text, year, desription, backgroundImage}) => {

    const style = {
        backgroundImage: `url('${backgroundImage}')`
    }

    return (
        <div className='theater' style={style}>
            <div className='theater-name'>
                {main_text}
            </div>
            <div className='theater-year'>
                Год: {year}
            </div>
            <div className='theater-discription'>
                {desription}
            </div>
        </div>
    );
}

export default MinTheater;