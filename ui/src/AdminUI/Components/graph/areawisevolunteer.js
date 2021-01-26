import React, { useState, useEffect } from 'react'


/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as actions from '../../../Actions/DonationAction';
import { useDonationDispatch, useDonationState } from '../../../Context/DonationContext';

import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';



function AreaWiseVolunteer(props) {
    var donationDispatch = useDonationDispatch();
    var { areawisevolunteercount } = useDonationState();

    useEffect(async () => {
        await actions.areaWiseVolunteerCount(donationDispatch);
    }, [])

    var data = null;
    data = areawisevolunteercount.map(f => {
        data=({
            "area": f.data.name,
            "volunteer": f.count
        })
        return data;
    })

    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = data;
    
    chart.innerRadius = am4core.percent(40);
    chart.depth = 50;
    
    chart.legend = new am4charts.Legend();
    
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "volunteer";
    series.dataFields.depthValue = "volunteer";
    series.dataFields.category = "area";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;

    return (
        <>
            <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />
                <div class="content-wrapper">

                    <div class="page-header page-header-light">
                        <div class="page-header-content header-elements-md-inline" style={{ height: "55px" }}>
                            <div class="page-title d-flex">
                                <h4> <span class="font-weight-semibold">Areawise Volunteer Graph</span></h4>
                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>

                        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div class="d-flex">
                                <div class="breadcrumb">
                                    <a href="/admin" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Dashboard</a>
                                    <a href="/admin/areawisevolunteer" class="breadcrumb-item">Areawise Volunteer Graph</a>

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
                                    <div id="chartdiv" style={{ height: "400px" }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(AreaWiseVolunteer);