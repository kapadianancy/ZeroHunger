import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function ChangePassword(props) {
    return (
        <>
            <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />


                <div class="content-wrapper">

                    <div class="page-header page-header-light">
                        <div class="page-header-content header-elements-md-inline" style={{ height: "55px" }}>
                            <div class="page-title d-flex">
                                <h4><span class="font-weight-semibold">Change Password </span></h4>
                                <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                            </div>


                        </div>

                        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div class="d-flex">
                                <div class="breadcrumb">
                                    <a href="/volunteer" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> dashboard</a>
                                    <a href="form_actions.html" class="breadcrumb-item">Change password</a>

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
                                                <label class="col-form-label col-lg-2">Old password <span class="text-danger">*</span></label>
                                                <div class="col-lg-9">
                                                    <input type="password" name="old password" class="form-control" required="" placeholder="Text input validation" aria-invalid="true" />
                                                    <label id="basic-error" class="validation-invalid-label" for="old password">This field is required.</label>
                                                </div>
                                            </div>


                                            <div class="form-group row">
                                                <label class="col-form-label col-lg-2">New Password <span class="text-danger">*</span></label>
                                                <div class="col-lg-9">
                                                    <input type="password" name="new password" id="password" class="form-control validate-equalTo-blur" required="" placeholder="enter new password" aria-invalid="false" />
                                                    <label id="password-error" class="validation-invalid-label validation-valid-label" for="new password">Success.</label>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-form-label col-lg-2">Repeat password <span class="text-danger">*</span></label>
                                                <div class="col-lg-9">
                                                    <input type="password" name="repeat_password" class="form-control" required="" placeholder="confirm your new password" aria-invalid="true" />
                                                    <label id="repeat_password-error" class="validation-invalid-label" for="repeat_password">Please enter the same value again.</label>
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
    );
}

export default ChangePassword;