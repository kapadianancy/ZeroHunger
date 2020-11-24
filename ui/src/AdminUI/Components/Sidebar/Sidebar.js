import React from 'react'

function Sidebar(proprs) {
	return (

		<div>

			<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md" style={{ minHeight: "555px" }}>

				<div class="sidebar-content">
					<div class="card card-sidebar-mobile">
						<ul class="nav nav-sidebar" data-nav-type="accordion">

							<li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Main"></i></li>
							<li class="nav-item">
								<a href="/admin" class="nav-link active">
									<i class="icon-home4"></i>
									<span>
										Dashboard
								</span>
								</a>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-users"></i> <span>Volunteer</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
									<li class="nav-item"><a href="index.html" class="nav-link">Volunteer List</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">Assign Landmark</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">Landmark Manager List</a></li>

								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-list-unordered"></i> <span>Receiver Category</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Themes">
									<li class="nav-item"><a href="index.html" class="nav-link">Add Receiver Category</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">List of Receiver Category</a></li>
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-color-sampler"></i> <span>Food Request</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Themes">
									<li class="nav-item"><a href="index.html" class="nav-link">Add Food Request</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">List of Food Request</a></li>
								</ul>
							</li>
			
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-coins"></i> <span>Donation</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Themes">
									<li class="nav-item"><a href="index.html" class="nav-link">List of Money Donation</a></li>
									<li class="nav-item"><a href="index.html" class="nav-link">List of Food Donation</a></li>
								</ul>
							</li>

							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-list"></i> <span>List of Food Delivered</span></a>
							</li>

							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-sphere"></i> <span>Event</span></a>
								<ul class="nav nav-group-sub" data-submenu-title="Widgets">
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">Add Events</a></li>
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">List of Events</a></li>
								</ul>
							</li>

							
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-camera"></i> <span>Portfolio</span></a>
								<ul class="nav nav-group-sub" data-submenu-title="Widgets">
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">Add Portfolio</a></li>
									<li class="nav-item"><a href="widgets_content.html" class="nav-link">List of Portfolio</a></li>
								</ul>
							</li>

							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-graph"></i> <span>Graphs</span></a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link"><i class="icon-grid6"></i> <span>Reports</span></a>
							</li>
						</ul>
					</div>

				</div></div>
		</div>

	)
}
export default Sidebar;