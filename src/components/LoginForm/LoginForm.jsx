import React, { useState } from 'react';
import styles from './LoginForm.module.css'
import LoginButton from '../LoginButton/LoginButton';
import { useContext } from 'react';
import { Context } from '../../context';


const LoginForm = (props) => {

    const [inputs, setInputs] = useState([
        {name: 'name', title: "На чиє ім'я оформлюється резервування?"},
        {name: 'phone', title: 'Ваш контактний номер'},
        {name: 'persons', title: 'Кількість персон'},
        {name: 'datetime', title: 'Дата та час', type: 'datetime-local'},
    ])

    const { Reserve, setReserve  } = useContext(Context)


    const buttonClick = (event) => {

        event.preventDefault()
        let copy = Object.assign([], Reserve);

        let date = new Date(document.querySelector('input[name="datetime"]').value)

        let now = new Date()

        if (document.querySelector('input[name="name"]').value == ''){
            return
        }

        if (document.querySelector('input[name="persons"]').value == ''){
            return
        }

        if (document.querySelector('input[name="phone"]').value == ''){
            return
        }

        if (date == NaN){
            return
        }

        let res = {
            name: document.querySelector('input[name="name"]').value,
            date: dateFormat(date),
            time: timeFormat(date),
            personCount: document.querySelector('input[name="persons"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            id: now.getTime()
        }

        document.querySelector('input[name="name"]').value = ''
        document.querySelector('input[name="persons"]').value = ''
        document.querySelector('input[name="phone"]').value = ''
        document.querySelector('input[name="datetime"]').value = ''

        copy.push(res)

        setReserve(copy)

    }

    const dateFormat = (datetime) =>{
        return datetime.getDate() + '.' + (datetime.getMonth()+1) + '.' + datetime.getFullYear()
    }

    const timeFormat = (datetime) => {
        return datetime.getHours()+ ':' + datetime.getMinutes()
    }


    return (
        <div className={styles.wrapper}>
            <form action="" className={styles.LoginForm}>
                {inputs.map(input=>{
                    return(
                        <div key={input.name}>
                            <p className={styles.title}>{input.title}</p>
                            <input name={input.name} className={styles.loginInput} type={input.type}></input>
                        </div>
                    )
                })}
                <div className={styles.button_wrapper}>
                    <LoginButton onClick={buttonClick} width='100%' height='26px'>Зарезервувати</LoginButton>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;