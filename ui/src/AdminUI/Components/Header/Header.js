import React from 'react';


function Header(props) {

    var style={
        height:70
    }
    return (
        <div>
        <div className="navbar navbar-expand-md navbar-dark" style={style}>
		<div className="navbar-brand">
			<a href="/admin" className="d-inline-block">
				<img src="assets/images/logo_light.png" alt="logo"/>
			</a>
		</div>
         <span class="badge  ml-md-3 mr-md-auto">
        
        <ul class="navbar-nav ">
            	
				<li class="nav-item dropdown dropdown-user">
					<a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
						<img src="assets/images/demo/users/face11.jpg" class="rounded-circle mr-2" height="34" alt=""/>
						<span>Admin</span>
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
						<a href="#" class="dropdown-item"><i class="icon-cog5"></i> Change Password</a>
						<a href="#" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
					</div>
				</li>
			</ul>
		</span>
		
	    </div>
        </div>
    );
}

export default Header;