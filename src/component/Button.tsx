import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
    disabled?: boolean
    className?: string
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button className={props.className} onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    );
};

export default Button;