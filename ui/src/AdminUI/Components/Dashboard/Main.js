import React from 'react'

function Main(proprs) {
    var style = {
        height : "120px"
    }
    return (

        <div class="content-wrapper">
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
                        <div class="card bg-green-400" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">15</h3>
                                    <div class="list-icons ml-auto"><i class="icon-man-woman"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Donors
								 </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3" >
                        <div class="card bg-indigo-400" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">10</h3>
                                    <div class="list-icons ml-auto"><i class="icon-gift"></i>
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
                                    <div class="list-icons ml-auto"><i class="icon-users"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Volunteers
								 </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-3" >
                        <div class="card bg-teal-400" style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">₹ 15000 </h3>
                                    <div class="list-icons ml-auto"><i class="icon-coins"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Money Donation
								 </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-lg-3">
                        <div class="card bg-danger-400"  style={style}>
                            <div class="card-body">
                                <div class="d-flex">
                                    <h3 class="font-weight-semibold mb-0">12</h3>
                                    <div class="list-icons ml-auto"><i class="icon-calendar3"></i>
                                    </div>
                                </div>

                                <div>
                                    Total Charity Events
								 </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Main;