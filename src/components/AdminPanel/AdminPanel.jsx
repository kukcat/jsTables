import React from 'react';
import MainPlace from '../MainPlace.jsx/MainPlace';
import SideBar from '../SideBar/SideBar';
import TablesPlace from '../TablesPlace/TablesPlace';

const AdminPanel = (props) => {
    return (
        <div>
            <TablesPlace></TablesPlace>
            <SideBar
                Reserve={props.Reserve}
            ></SideBar>
        </div>
    );
};

export default AdminPanel;