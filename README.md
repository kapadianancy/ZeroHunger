# ZeroHunger
1- event/caterer/party/resturant/etc donate excessive food
2- donate money to site(general or specific)

4- donate food on special ocassion(general or specific)
5- quality checking (1)donate food 2)bio-gas-plant)
6- volunteer registration
7- charity events 
8- admin can register slum areas
9- donor/receiver registration


[3- re-sells grocery foods approaching their best-before date at a discount *]


panel- admin, donor, volunteer

1-->Role
-id -int
-name(admin,donor,reciver,volunteer) -varchar
-is_deleted -boolean
-updatedAt -boolean
-createdAt -boolean

2-->user
-id 
-name
-username
-email
-password
-phone number
-address
-landmark id
-pincode
-role id
-is_deleted
-updatedAt
-createdAt

3-->volunteer
-id
-user id
-DOB
-gender
-profession
-skillset
-weekdays (morning,afternoon,evening,night)
-weekends
-vehicle mode
-is_deleted
-updatedAt
-createdAt

4-->reciever category
-id
-name(old aged home,orphnage,goverment school/hospital,slums,homeless,bio-gas plant)
-is_deleted
-updatedAt
-createdAt

5-->reciever
-id
-category id
-user id
-population
-is_deleted
-updatedAt
-createdAt



6-->food listing
-id
-date
-time(morning,noon,night)
-donor-id
-event
-reciever-id
-plates
-is_deleted
-updatedAt
-createdAt

7-->food delivery
-id
-food listing id
-volunteer id
-status
-is_deleted
-updatedAt
-createdAt

8-->food request
-id
-date
-time
-plates
-reciever id
-is_deleted
-updatedAt
-createdAt

9-->donation
-id
-date
-amount
-reciever-id
-is_deleted
-updatedAt
-createdAt

10-->charity event
-id
-title
-date
-time
-location
-purpose
-description
-banner
-recieved funds
-is_deleted
-updatedAt
-createdAt

11-->landmark
-id
-name
-pincode
-latitude
-longitude
-is_deleted
-updatedAt
-createdAt

12-->landmark manager
-id
-volunteer id
-landmark id
-is_deleted
-updatedAt
-createdAt

13-->portfolio
-id
-image
-description
-is_deleted
-updatedAt
-createdAt

14-->donor category
-id
-category(event , caterer , resturant ,other....)
-is_deleted
-updatedAt
-createdAt

15-->donor
-id
-donor category id
-userid
-is_deleted
-updatedAt
-createdAt


------------------------Admin panel----------------

login-logout
edit profile
change password
forget password
dashboard
-volunteers
	list of volunteer
	assign area to volunteer (landmark manager)
-reciever category management
	add
	list
-food request
	enter food request (requested by reciever via phone)
	list of food request
-donation
	list of food donate
	list of money donation

-list of food delivered
-event management
	add event
	list of event(edit,delete)
-portfolio management
	add
	list
-graph
-report

----------------volunteer--------------------
login-logout
edit profile
change password
forget password
dashboard
-reciever mangement
	add
	list
-food managemnt
	list of request
	list of donate food
	quality checking + redirect food to reciever
-manage delivery
	list of volunteers (area) + assign pickup and delivery
-portfolio management
	add
	list
-graph
-report

--------------------donor------------------

-menu
	home
	events
	portfolio
	team
	volunteer
	contact
	donate  (donate food , donate money page display) (donate food -> login/signup)

-sidebar (only if donor login)
	donation history
	new donation (donor category wise form)
	logout
	
		
	



