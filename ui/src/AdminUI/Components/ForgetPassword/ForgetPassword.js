import React from 'react'

function ForgetPassword() {
    var path = "../assets/images/about_layout.png";
    var style = {
        backgroundImage: "url(" + path + ")",
        height: "100%",
        backgroundPosition: 'center',
        //backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={style}>
            <div className="content d-flex justify-content-center align-items-center">

                <form className="login-form" action="#" style={{ marginTop: "120px" }}>
                    <div className="card mb-0">
                        <div className="card-body">
                            <div className="text-center mb-3">
                                <i className="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 className="mb-0">Forget Password</h5>
                                <span className="d-block text-muted">We'll send you instructions in email</span>
                            </div>

                            <div className="form-group form-group-feedback form-group-feedback-right">
                                <input type="email" className="form-control" placeholder="Your email" />
                                <div className="form-control-feedback">
                                    <i className="icon-mail5 text-muted"></i>
                                </div>
                            </div>

                            <div className="text-right">
                                <a href="/admin/login">Back to login</a>
                            </div>

                            <button type="submit" className="btn bg-blue btn-block"><i className="icon-spinner11 mr-2"></i> Forget password</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default ForgetPassword;