import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from './Content';

function Dashboard(props) {
    return (
        <div>
            <Header />
            <div class="page-content">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
}

export default Dashboard;