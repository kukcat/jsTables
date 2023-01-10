import React from 'react';
import styles from "./LoginInput.module.css"

const LoginInput = ({children, ...props}) => {
    return (
        <div>
            <p className={styles.title}>{children}</p>
            <input {...props} className={styles.loginInput}></input>
        </div>

    );
};

export default LoginInput;