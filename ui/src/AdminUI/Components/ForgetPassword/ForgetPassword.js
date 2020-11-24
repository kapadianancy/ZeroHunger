import React from 'react'

function ForgetPassword() {
    return (
        <div class="content d-flex justify-content-center align-items-center">

            <form class="login-form" action="#" style={{marginTop:"85px"}}>
                <div class="card mb-0">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <i class="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                            <h5 class="mb-0">Forget Password</h5>
                            <span class="d-block text-muted">We'll send you instructions in email</span>
                        </div>

                        <div class="form-group form-group-feedback form-group-feedback-right">
                            <input type="email" class="form-control" placeholder="Your email" />
                            <div class="form-control-feedback">
                                <i class="icon-mail5 text-muted"></i>
                            </div>
                        </div>

                        <button type="submit" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> Forget password</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default ForgetPassword;