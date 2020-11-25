import React from 'react'

function Sidebar(proprs) {

	return (

		<div>

			<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md" style={{height:"100%"}}>

				<div class="sidebar-content">
					<div class="card card-sidebar-mobile">
						<ul class="nav nav-sidebar" data-nav-type="accordion">

							
							<li class="nav-item">
								<a href="/volunteer" class="nav-link active">
									<i class="icon-home4"></i>
									<span>
										Dashboard
								</span>
								</a>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-people"></i> <span>Receiver Management</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Receiver Management">
									<li class="nav-item"><a href="index.html" class="nav-link">Receiver List</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">Add new Receiver</a></li>
									
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-coffee"></i><span>Food Management</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Food Management">
									<li class="nav-item"><a href="index.html" class="nav-link">List of Request</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">List of Donated Food</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">Redirect Food</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-truck"></i><span>Pickup and Delivery</span></a>							
							</li>
		
							
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-camera"></i> <span>Portfolio</span></a>
								<ul class="nav nav-group-sub" data-submenu-title="Portfolio">
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">Add Portfolio</a></li>
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">List of Portfolio</a></li>
								</ul>
							</li>

							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-graph"></i> <span>Graphs</span></a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-table"></i> <span>Reports</span></a>
							</li>
						</ul>
					</div>

				</div></div>
		</div>

	)
}
export default Sidebar;