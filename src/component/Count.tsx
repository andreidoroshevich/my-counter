import React from 'react';

type CountPropsType = {
    className?: string
    count: number
}

const Count = (props: CountPropsType) => {
    return (
        <div className={props.className}>{props.count}</div>

    );
};

export default Count;