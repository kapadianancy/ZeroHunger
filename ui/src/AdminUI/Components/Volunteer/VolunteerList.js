import React, { useEffect } from 'react'

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import * as actions from '../../../Actions/VolunteerAction';
import { useVolunteerDispatch, useVolunteerState } from '../../../Context/VolunteerContext';


function VolunteerList(props) {
	var volunteerDispatch = useVolunteerDispatch();
	var { volunteers } = useVolunteerState();

	useEffect(async () => {
		await actions.getAllVolunteer(volunteerDispatch);
	}, [])




	var data = null;
	data = volunteers.map(v => {
		const date = new Date(v.DOB);
		var dd = date.getDate();
		var mm = date.getMonth() + 1;
		var yyyy = date.getFullYear();
		var d = yyyy + "-" + mm + "-" + dd

		var weekday = "";
		v.weekdays.forEach(w => {
			weekday += w + " "
		});

		var weekend = "";
		v.weekends.forEach(w => {
			weekend += w + " "
		});

		var vehicle_mode = "";
		v.vehicle_mode.forEach(v => {
			vehicle_mode += v + " "
		});
		data = (

			<tr>
				<td>{v.user_id.name}</td>
				<td>{v.user_id.email}</td>
				<td>{v.user_id.phone_number}</td>
				<td>{v.user_id.address}</td>
				<td>{d}</td>
				<td>{v.gender}</td>
				<td>{v.profession}</td>
				<td>{v.skillset}</td>
				<td>{weekday}</td>
				<td>{weekend}</td>
				<td>{vehicle_mode}</td>
			</tr>

		)
		return data;
	})

	return (

		<>
			<Header />
			<div className="page-content" style={{ height: "100%" }} >
				<Sidebar />
				<div class="content-wrapper">

					<div class="page-header page-header-light">
						<div class="page-header-content header-elements-md-inline" style={{ height: "55px" }}>
							<div class="page-title d-flex">
								<h4> <span class="font-weight-semibold">Volunteer List</span></h4>
								<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
							</div>


						</div>

						<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
							<div class="d-flex">
								<div class="breadcrumb">
									<a href="/admin" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Dashboard</a>
									<a href="/admin/volunteerlist" class="breadcrumb-item">Volunteer List</a>

								</div>

								<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
							</div>


						</div>
					</div>

					<div class="content">

						<div class="row" style={{ marginBottom: "50px" }}>
							<div class="col-md-12">
								<div class="card" >

									<table class="table datatable-basic table-hover">
										<thead>
											<tr>
												<th>Name</th>
												<th>Email</th>
												<th>Phone Number</th>
												<th>Address</th>
												<th>Date Of Birth</th>
												<th>Gender</th>
												<th>Profession</th>
												<th>Skillset</th>
												<th>WeekDays</th>
												<th>WeekEnds</th>
												<th>Vehicle</th>
											</tr>
										</thead>
										<tbody>
											{data}
										</tbody>
									</table>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default VolunteerList;