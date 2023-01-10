import React from 'react';
import ReserveItem from '../ReserveItem/ReserveItem';
import styles from "./SideBar.module.css"
import { useContext } from 'react';
import { Context } from '../../context';

const SideBar = (props) => {

    const { onTable  } = useContext(Context)


    return (
        <div className={styles.sideBar}>
            <h1 className={styles.head}>Замовлення</h1>
            <div className={styles.itemWrapper}>
            
            {props.Reserve.map(reserve=>{
                if(!onTable.includes(String(reserve.id))){
                    return <ReserveItem
                    key={reserve.id}
                    name={reserve.name}
                    date={reserve.time}
                    personCount={reserve.personCount}
                    phone={reserve.phone}
                    id={reserve.id}
                ></ReserveItem>
                }
            })}

            </div>
        </div>
    );
};

export default SideBar;