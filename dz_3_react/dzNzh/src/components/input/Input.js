import React from 'react';


const Input = ({placeholder, type='text', onChangeInput}) => {
    // const sum = (a,b=2000) => {
    //     return a+b
    // }
    //
    // console.log(sum(7, 3000));
    return (
        <input placeholder={placeholder}
               type={type}
               onChange={onChangeInput}
        />
    );
};

export default Input;