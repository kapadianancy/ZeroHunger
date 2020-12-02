import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function EditProfile(props) {
    return (
        <>
        <Header />
            <div className="page-content" style={{ height: "100%" }} >
                <Sidebar />
           
        <div class="content-wrapper">

        <div class="page-header page-header-light">
            <div class="page-header-content header-elements-md-inline" style={{height:"55px"}}>
                <div class="page-title d-flex">
                    <h4><span class="font-weight-semibold">Edit Profile </span></h4>
                    <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                </div>
        
                
            </div>
        
            <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                <div class="d-flex">
                    <div class="breadcrumb">
                        <a href="/volunteer" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> dashboard</a>
                        <a href="form_actions.html" class="breadcrumb-item">Edit Profile</a>
                        
                    </div>
        
                    <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                </div>
        
                
            </div>
        </div>
        
        <div class="content">
        
            <div class="row" style={{marginBottom:"50px"}}>
                <div class="col-md-12">
                  
                    <div class="card">
                        <div class="card-header header-elements-inline">
                          
                        </div>
        
                        <div class="card-body">
                            <form action="#">

                            <div class="form-group row">
									<label class="col-form-label col-lg-2">Name <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<input type="text" name="name" class="form-control" required="" placeholder="enter your name" aria-invalid="true"/>
                                        <label id="basic-error" class="validation-invalid-label" for="name">This field is required.</label>
									</div>
								</div>
                            <div class="form-group row">
									<label class="col-form-label col-lg-2">Username <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<input type="text" name="username" class="form-control" required="" placeholder="enter your username" aria-invalid="true"/>
                                        <label id="basic-error" class="validation-invalid-label" for="username">This field is required.</label>
									</div>
								</div>
        
                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Email <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<input type="email" name="email" class="form-control" id="email" required="" placeholder="Enter a valid email address"/>
									</div>
								</div>
        
                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Phone number <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<input type="text" name="phone number" class="form-control" required="" placeholder="enter your phone number" aria-invalid="true"/>
                                        <label id="basic-error" class="validation-invalid-label" for="phone number">This field is required.</label>
									</div>
								</div>
        
                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Address <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<textarea rows="5" cols="5" name="address" class="form-control" required="" placeholder="enter your address"></textarea>
									</div>
								</div>

                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Landmark <span class="text-danger">*</span></label>
									<div class="col-lg-9">
										<select name="landmark" class="form-control" required="">
											<option value="">Choose area....</option> 
											<optgroup label="Landmarks">
												<option value="AK">Alaska</option>
												<option value="HI">Hawaii</option>
												<option value="CA">California</option>
											</optgroup>
											
										</select>
									</div>
								</div>

                               <div class="form-group row">
									<label class="col-form-label col-md-2">Date of Birth</label>
									<div class="col-md-9">
										<input class="form-control" type="date" name="date"/>

									</div>
								</div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-2">Gender</label>
									<div class="col-md-9">
               

									<div class="form-check form-check-inline">
											<div class="uniform-choice">
                                                    <input type="radio" class="form-check-input-styled" name="gender"/>
                                            </div>
											Female
									</div>

                                    <div class="form-check form-check-inline">
                                        <div class="uniform-choice">
                                                   <input type="radio" class="form-check-input-styled" name="gender"/>
                                           </div>
											Male
                                        	</div>
								</div>
                            </div>

                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Profession </label>
									<div class="col-lg-9">
										<input type="text" name="profession" class="form-control" placeholder="enter your Profession" aria-invalid="true"/>
                                       </div>
								</div>

                                <div class="form-group row">
									<label class="col-form-label col-lg-2">Skillset </label>
									<div class="col-lg-9">
										<input type="text" name="skillset" class="form-control" placeholder="enter your skills" aria-invalid="true"/>
                                       </div>
								</div>

                                <div class="form-group row">
                                <label class="col-form-label col-md-2">Weekdays</label>
									<div class="col-md-9">
               

									<div class="form-check form-check-inline">
											<div class="uniform-checker">
                                                    <input type="checkbox" class="form-check-input-styled" name="morning"/>
                                            </div>
											Morning
									</div>

                                    <div class="form-check form-check-inline">
                                        <div class="uniform-checker">
                                                   <input type="checkbox" class="form-check-input-styled" name="noon"/>
                                           </div>
											Noon
                                        	</div>
                                            <div class="form-check form-check-inline">
                            <div class="uniform-checker">
                                            <input type="checkbox" class="form-check-input-styled" name="night"/>
                                    </div>
                                   Night
                                    </div>       
								</div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-2">Weekends</label>
									<div class="col-md-9">
               

									<div class="form-check form-check-inline">
											<div class="uniform-checker">
                                                    <input type="checkbox" class="form-check-input-styled" name="morning"/>
                                            </div>
											Morning
									</div>

                                    <div class="form-check form-check-inline">
                                        <div class="uniform-checker">
                                                   <input type="checkbox" class="form-check-input-styled" name="noon"/>
                                           </div>
											Noon
                                        	</div>
                                            <div class="form-check form-check-inline">
                            <div class="uniform-checker">
                                            <input type="checkbox" class="form-check-input-styled" name="night"/>
                                    </div>
                                   Night
                                    </div>       
								</div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-2">Vehicle mode</label>
									<div class="col-md-9">
               

									<div class="form-check form-check-inline">
											<div class="uniform-checker">
                                                    <input type="checkbox" class="form-check-input-styled" name="two whheeler"/>
                                            </div>
											Two wheeler
									</div>

                                    <div class="form-check form-check-inline">
                                        <div class="uniform-checker">
                                                   <input type="checkbox" class="form-check-input-styled" name="four wheeler"/>
                                           </div>
											Four wheeler
                                     </div>
                                    </div>       
                            </div>

        
                                <div class="form-group row mb-0">
                                    <div class="col-lg-10 ml-lg-auto">
                                        <button type="submit" class="btn btn-light">Cancel</button>
                                        <button type="submit" class="btn bg-teal-400 ml-3">Edit <i class="icon-paperplane ml-2"></i></button>
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

export default EditProfile;