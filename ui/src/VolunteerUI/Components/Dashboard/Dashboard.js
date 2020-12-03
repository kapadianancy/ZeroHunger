import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import { Redirect } from 'react-router';

import * as ractions from '../../../Actions/ReceiverAction'
import {useReceiverDispatch,useReceiverState} from '../../../Context/ReceiverContext';


function Dashboard(props) {

    var user=JSON.parse(localStorage.getItem('user'));
    var receiverDispatch=useReceiverDispatch();
    var{totalAreawise}=useReceiverState();
    var[receiver,setReceiver]=useState(null)

    useEffect(async()=>
    {
        await ractions.totalAreawiseReceiver(receiverDispatch,user.landmark_id._id);
        console.log(user.landmark_id._id)
        setReceiver(totalAreawise)
        console.log(totalAreawise)
    },[totalAreawise])
    
    var style = {
        height : "150px"
    }

    var path="../assets/images/bottom-bg.png";
    var bgImageStyle ={
      backgroundImage: "url(" + path + ")",
      height:"100%",
      backgroundPosition: 'bottom',
      //backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

    return (
        <>
       
        <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />
       
        <div class="content-wrapper" style={bgImageStyle}>
            <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                <div class="d-flex">
                    <div class="breadcrumb">
                        <a href="/admin" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
                        <span class="breadcrumb-item active">Dashboard</span>
                    </div>
                    <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                </div>
            </div>


            <div class="content">
                <div class="row">
                    

                    <div class="col-lg-3" >
                        <div class="card bg-indigo-400" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">{receiver}</h3>
                                    <div class="list-icons ml-auto"><i class="icon-collaboration mr-3 icon-2x"></i>
                                    </div>
                                </div>
                                <div>
                                    Total Receivers
								 </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="card bg-pink-400" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">35</h3>
                                    <div class="list-icons ml-auto"><i class="icon-users mr-3 icon-2x"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Volunteers
								 </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-3" >
                        <div class="card bg-green-600" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">15 </h3>
                                    <div class="list-icons ml-auto"><i class="icon-store mr-3 icon-2x"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Food Request
								 </div>
                            </div>
                        </div>
                    </div>

                    
                    

                    <div class="col-lg-3">
                        <div class="card bg-primary-600"  style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">12</h3>
                                    <div class="list-icons ml-auto"><i class="icon-coffee mr-3 icon-2x"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Food Donation
								 </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Dashboard;