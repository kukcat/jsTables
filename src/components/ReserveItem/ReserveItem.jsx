import React from 'react';
import styles from './ReserveItem.module.css'
import { Context } from '../../context';
import { useContext } from 'react';

const ReserveItem = (props) => {

    const { Reserve, setReserve, 
        onTable, setOnTable, dragStart, 
        dragOver, dragEnd  } = useContext(Context)

    function deleteReserve(id){
        let arr = []
        
        for(let i = 0; i<Reserve.length; i++){
            if(!+Reserve[i]['id'] == +id){
                arr.push(onTable[i])
            }
        }

        setReserve(arr)

    }


    return (
        <div className={styles.ReserveItem} 
        draggable={true}
        onDragStart={(e)=> dragStart(e, this)}
        onDragEnd={(e)=> dragEnd(e)}
        card-id={props.id}

        >
            <div>{props.name}</div>
            <div>{props.date}</div>
            <div>К-ть осіб: {props.personCount}</div>
            <div>{props.phone}</div>
            <p onClick={(e)=>deleteReserve(props.id)} className={styles.delete}>+</p>

        </div>
    );
};

export default ReserveItem;