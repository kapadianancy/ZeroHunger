import React, { useState, useEffect } from 'react'

import * as actions from '../../../Actions/DonationAction';
import { useDonationDispatch, useDonationState } from '../../../Context/DonationContext';

import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function FoodDonationList(props) {

    var donationDispatch = useDonationDispatch();
    var { fooddonation } = useDonationState();

    useEffect(async () => {
        await actions.getAllFoodDonation(donationDispatch);
    }, [])

    var data = null;
    data = fooddonation.map(f => {
        const date = new Date(f.date);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        data = (
            <tr>
                <td>{dd}-{mm}-{yyyy}</td>
                <td>{f.time}</td>
                <td>{f.donor_id.user_id.name}</td>
                <td>{f.event}</td>
                {f.receiver_id!=null?<td>{f.receiver_id.name}</td>:<td>-</td>}
                <td>{f.plates}</td>
            </tr>

        )
        return data;
    })
    return (
        <>
            <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />
                <div class="content-wrapper">

                    <div class="page-header page-header-light">
                        <div class="page-header-content header-elements-md-inline" style={{ height: "55px" }}>
                            <div class="page-title d-flex">
                                <h4> <span class="font-weight-semibold">Food Donation List</span></h4>
                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>

                        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div class="d-flex">
                                <div class="breadcrumb">
                                    <a href="/admin" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Dashboard</a>
                                    <a href="/admin/fooddonationlist" class="breadcrumb-item">Food Donation List</a>

                                </div>

                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>
                    </div>

                    <div class="content">

                        <div class="row" style={{ marginBottom: "50px" }}>
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header header-elements-inline">
                                        <h5 class="card-title"></h5>
                                        <div class="header-elements">

                                        </div>
                                    </div>
                                    <table class="table datatable-basic table-hover">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Donor</th>
                                                <th>Event</th>
                                                <th>Receiver</th>
                                                <th>Plates</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(FoodDonationList);