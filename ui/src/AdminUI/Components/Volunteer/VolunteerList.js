import React, { useEffect, useState } from 'react'

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import * as actions from '../../../Actions/VolunteerAction';
import * as lactions from '../../../Actions/LandmarkManagerAction';

import { useVolunteerDispatch, useVolunteerState } from '../../../Context/VolunteerContext';
import { useLandmarkManagerDispatch, useLandmarkManagerState } from '../../../Context/LandmarkManagerContext';


function VolunteerList(props) {
	var volunteerDispatch = useVolunteerDispatch();
	var { volunteers } = useVolunteerState();

	var landmarkmanagerDispatch = useLandmarkManagerDispatch();
	var { landmarkmanager } = useLandmarkManagerState();

	useEffect(async () => {
		await actions.getAllVolunteer(volunteerDispatch);
	}, [])

	const assignlandmark = async (landmark, volunteer) => {
		let manager = {
			volunteer_id: volunteer,
			landmark_id: landmark
		}
		await lactions.addLandmarkManager(landmarkmanagerDispatch, manager);
	}

	const checklandmarkmanager = async (volunteer) => {
		await lactions.getLandmarkManagerByVolunteer(landmarkmanagerDispatch, volunteer);
	}

	var [data, setData] = useState(null);
	useEffect(() => {
		var result;
		result = volunteers.map((v) => {
			const date = new Date(v.DOB);
			var dd = date.getDate();
			var mm = date.getMonth() + 1;
			var yyyy = date.getFullYear();
			var d = yyyy + "-" + mm + "-" + dd

			var weekday = "";
			v.weekdays.forEach((w) => {
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
			var assign = null;
			checklandmarkmanager(v._id);

			if (landmarkmanager == "False") {
				assign = (<a class="btn bg-success-400 ml-3" >Assigned</a>);
			}
			else {
				assign = (<a class="btn bg-teal-400 ml-3" onClick={() => assignlandmark(v.user_id.landmark_id._id, v._id)} >Assign</a>);
			}


			result = (

				<tr>
					<td>{assign}</td>
					<td>{v.user_id.name}</td>
					<td>{v.user_id.email}</td>
					<td>{v.user_id.phone_number}</td>
					<td>{v.user_id.address}</td>
					<td>{v.user_id.landmark_id.name}</td>
					<td>{d}</td>
					<td>{v.gender}</td>
					<td>{v.profession}</td>
					<td>{v.skillset}</td>
					<td>{weekday}</td>
					<td>{weekend}</td>
					<td>{vehicle_mode}</td>
				</tr>

			)
			return result;
		})
		setData(result);

	}, [volunteers, landmarkmanager])



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
												<th>Assign Landmark</th>
												<th>Name</th>
												<th>Email</th>
												<th>Phone Number</th>
												<th>Address</th>
												<th>Landmark</th>
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