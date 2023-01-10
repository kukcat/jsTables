import React from 'react';
import styles from './TablesPlace.module.css'
import { Context } from '../../context';
import { useContext } from 'react';


const TablesPlace = () => {

    const { Reserve, 
            onTable, setOnTable, 
            dragover, dragleave  } = useContext(Context)

    function findIndex(id){
        for (let i = 0; i<Reserve.length; i++){
            if(Reserve[i]['id'] == id){
                console.log('ret',i)
                
                return i
            }
        }
    }

    function deleteReserve(table, index){
        let arr = []
      
        for(let i = 0; i<onTable.length; i++){
            if(i == index){
            arr.push(-1)
            }else{
            arr.push(onTable[i])
            }
        }

      setOnTable(arr)

    }

    return (
        <div className={styles.Place}>
            <p className={styles.head_text}>Столи</p>
            <div className={styles.wrapper}>
            {onTable.map((table, index)=>{
                if (table === -1){
                    return <div 
                    key={index} 
                    table-id={index} 
                    className={styles.table}
                    onDragEnter={(e)=>dragover(e)}
                    onDragLeave={(e)=>dragleave(e)}
                    ></div>
                }else{
                        return <div card-id={table} table-id={index} className={styles.table} key = {index} >
                                <p>{Reserve[findIndex(table)]['name']}</p>
                                <p>{Reserve[findIndex(table)]['time']}</p>
                                <p>{Reserve[findIndex(table)]['phone']}</p>
                                <p onClick={(e)=>deleteReserve(table, index)} className={styles.delete}>+</p>
                            </div>
                }
            })}
            </div>
        </div>
    );
};

export default TablesPlace;