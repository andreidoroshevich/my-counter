import React from 'react';

type HeaderPropsType = {
    className?: string
    name: string

}

const Header = (props: HeaderPropsType) => {
    return (
        <h2><span className={props.className}>{props.name}</span></h2>

    );
};

export default Header;