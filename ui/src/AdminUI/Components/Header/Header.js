import React from 'react';


function Header(props) {

    var style={
        height:70
    }
    return (
        <div>
        <div className="navbar navbar-expand-md navbar-dark" style={style}>
		<div className="navbar-brand">
			<a href="index.html" className="d-inline-block">
				<img src="assets/images/logo_light.png" alt="logo"/>
			</a>
		</div>

		
		
	    </div>
        </div>
    );
}

export default Header;