import React from 'react';
import style from './Header.module.css'
import logo from "./grape.png";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.icon}>
                <img src={logo} alt="" className={style.img} />
            </div>
            <p className="text">
                Мережа ресторанів "Аліканте"
            </p>
            {props.children}
        </header>
    );
};

export default Header;