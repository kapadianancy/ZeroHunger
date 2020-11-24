import React from 'react'

function Sidebar(proprs) {
    return (
        
        <div>
            
		<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

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
							<a href="#" class="nav-link"><i class="icon-copy"></i> <span>Volunteer</span></a>

							<ul class="nav nav-group-sub" data-submenu-title="Layouts">
								<li class="nav-item"><a href="index.html" class="nav-link">Volunteer List</a></li>
                                <li class="nav-item"><a href="index.html" class="nav-link">Assign Landmark</a></li>
                                <li class="nav-item"><a href="index.html" class="nav-link">Landmark Manager List</a></li>

							</ul>
						</li>
						<li class="nav-item nav-item-submenu">
							<a href="#" class="nav-link"><i class="icon-color-sampler"></i> <span>Themes</span></a>

							<ul class="nav nav-group-sub" data-submenu-title="Themes">
								<li class="nav-item"><a href="index.html" class="nav-link active">Default</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/material/full/index.html" class="nav-link">Material</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/dark/full/index.html" class="nav-link">Dark</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/clean/full/index.html" class="nav-link disabled">Clean <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
							</ul>
						</li>
						<li class="nav-item nav-item-submenu">
							<a href="#" class="nav-link"><i class="icon-stack"></i> <span>Starter kit</span></a>

							<ul class="nav nav-group-sub" data-submenu-title="Starter kit">
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/layout_nav_horizontal.html" class="nav-link">Horizontal navigation</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_none.html" class="nav-link">No sidebar</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_main.html" class="nav-link">1 sidebar</a></li>
								<li class="nav-item nav-item-submenu">
									<a href="#" class="nav-link">2 sidebars</a>
									<ul class="nav nav-group-sub">
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_secondary.html" class="nav-link">Secondary sidebar</a></li>
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_right.html" class="nav-link">Right sidebar</a></li>
									</ul>
								</li>
								<li class="nav-item nav-item-submenu">
									<a href="#" class="nav-link">3 sidebars</a>
									<ul class="nav nav-group-sub">
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_right_hidden.html" class="nav-link">Right sidebar hidden</a></li>
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_right_visible.html" class="nav-link">Right sidebar visible</a></li>
									</ul>
								</li>
								<li class="nav-item nav-item-submenu">
									<a href="#" class="nav-link">Content sidebars</a>
									<ul class="nav nav-group-sub">
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_content_left.html" class="nav-link">Left sidebar</a></li>
										<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/sidebar_content_right.html" class="nav-link">Right sidebar</a></li>
									</ul>
								</li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/layout_boxed.html" class="nav-link">Boxed layout</a></li>
								<li class="nav-item-divider"></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/navbar_fixed_main.html" class="nav-link">Fixed main navbar</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/navbar_fixed_secondary.html" class="nav-link">Fixed secondary navbar</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/navbar_fixed_both.html" class="nav-link">Both navbars fixed</a></li>
								<li class="nav-item"><a href="http://demo.interface.club/limitless/demo/Template/layout_1/LTR/default/seed/layout_fixed.html" class="nav-link">Fixed layout</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a href="changelog.html" class="nav-link">
								<i class="icon-list-unordered"></i>
								<span>Changelog</span>
								<span class="badge bg-blue-400 align-self-center ml-auto">2.3</span>
							</a>
						</li>
							
						<li class="nav-item nav-item-submenu">
							<a href="#" class="nav-link"><i class="icon-atom2"></i> <span>Widgets</span></a>
							<ul class="nav nav-group-sub" data-submenu-title="Widgets">
								<li class="nav-item"><a href="widgets_content.html" class="nav-link">Content widgets</a></li>
								<li class="nav-item"><a href="widgets_stats.html" class="nav-link">Statistics widgets</a></li>
								<li class="nav-item"><a href="widgets_menu.html" class="nav-link disabled">Menu widgets <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
								<li class="nav-item"><a href="widgets_form.html" class="nav-link disabled">Form widgets <span class="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
							</ul>
						</li>

					</ul>
				</div>

			</div></div>
        </div>
        
    )
}
export default Sidebar;