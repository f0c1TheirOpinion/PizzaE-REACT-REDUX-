import React from "react";
import classNames from "classnames";

const Button = (props) => {

    const {outline, buttonClass, buttonAdd,onClick, children} = props;
    
    return(
        <button onClick={onClick}  className={classNames('button', buttonClass, {
            'button--outline': outline,
            'button--add':buttonAdd
        })}>{children}</button>
    )
    
}
export default Button;