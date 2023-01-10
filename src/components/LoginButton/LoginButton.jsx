import React from 'react';
import styles from './LoginButton.module.css'

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick} style={
            {
                width: props.width,
                height: props.height
            }
        } className={styles.button}> {props.children} </button>
    );
};

export default LoginButton;
