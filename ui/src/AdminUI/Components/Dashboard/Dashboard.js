import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from './Main';

function Dashboard(props) {
    return (
        <div>
            <Header />
            <div class="page-content">
                <Sidebar />
                <Main />
            </div>
          
        </div>
    );
}

export default Dashboard;