import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function ChangePassword() {
    return (
        <>
            <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />
                <div class="content-wrapper">

                    <div class="page-header page-header-light">
                        <div class="page-header-content header-elements-md-inline" style={{ height: "55px" }}>
                            <div class="page-title d-flex">
                                <h4> <span class="font-weight-semibold">Change Password </span></h4>
                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>

                        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div class="d-flex">
                                <div class="breadcrumb">
                                    <a href="/admin" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Dashboard</a>
                                    <a href="form_actions.html" class="breadcrumb-item">Change Password</a>

                                </div>

                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>
                    </div>

                    <div class="content">

                        <div class="row">
                            <div class="col-md-12">

                                <div class="card">
                                    <div class="card-header header-elements-inline">

                                    </div>

                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-group row">
                                                <label class="col-form-label col-lg-2">Old Password</label>
                                                <div class="col-lg-10">
                                                    <input type="password" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-form-label col-lg-2">New Password</label>
                                                <div class="col-lg-10">
                                                    <input type="password" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-form-label col-lg-2">Confirm New Password</label>
                                                <div class="col-lg-10">
                                                    <input type="password" class="form-control" />
                                                </div>
                                            </div>


                                            <div class="form-group row mb-0">
                                                <div class="col-lg-10 ml-lg-auto">
                                                    <button type="submit" class="btn btn-light">Cancel</button>
                                                    <button type="submit" class="btn bg-teal-400 ml-3">Change <i class="icon-paperplane ml-2"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ChangePassword;