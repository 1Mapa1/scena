import React from "react";

const MinTheater = ({main_text, year, desription, backgroundImage}) => {

    const style = {
        backgroundImage: `url('${backgroundImage}')`
    }

    return (
        <div className='theater' style={style}>
            <div className='theater-name' style={{minHeight: '103px'}}>
                {/* <div style={{backgroundColor: 'transparent'}}> */}
                    {main_text}
                {/* </div>
                <div style={{backgroundColor: 'transparent'}}>
                    {year}
                </div> */}
            </div>
            <div className='theater-year'>
                {year}
            </div>
            <div className='theater-discription'>
                {desription}
            </div>
        </div>
    );
}

export default MinTheater;