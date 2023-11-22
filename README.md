# ntu-project4-porschesvc-mobileapp

## Project Overview

**Project Name:** Porsche Service Application - Mobile App

### Description

The Porsche Service Application is an innovative React Native mobile application tailored for Porsche vehicle owners, offering seamless access to service logs and a user-friendly platform for scheduling appointments with Porsche service centers. This project leverages Expo and React Native for the frontend, complemented by a robust Java Spring Boot backend.

### Key Features

#### Secure Authentication

- Implemented a robust authentication system, allowing exclusive access to the home screen and advanced features upon successful login.
- Public screens include a user-friendly Login and Registration interface.
- Utilizes JSON Web Tokens (JWT) for secure authentication, with frontend token verification.
- Automatic token clearance upon user logout ensures data security.

#### Service Centre Locations

- **Current Functionality**: The app presently directs users to the Porsche service center in Singapore.
- **Geolocation Integration**: On loading, the app requests location-sharing permissions to display the user's current geolocation.
- **Interactive Search**: Users can click the search button to navigate to the Singapore service center, providing the total distance in kilometers.
- **Future Expansion**: Plans include extending the service center feature to cover additional regions and implementing point-to-point navigation for a comprehensive user experience.

#### Appointment Creation (Future Roadmap)

- **Appointment Scheduling**: Introduce a feature enabling users to schedule appointments with Porsche service centers directly through the mobile app.
- **Calendar Integration**: Implement integration with device calendars to provide users with reminders and easy access to their scheduled appointments.
- **Notifications**: Enable push notifications to keep users informed about upcoming appointments, service updates, and other relevant information.

## Technologies Used

- **Frontend**: React Native, Expo
- **Backend**: Java Spring Boot

<!-- ## How to Use

1. **Clone the repository**: `git clone https://github.com/your-username/ntu-project4-porschesvc-mobileapp.git`
2. **Install dependencies**: `npm install` or `yarn install`
3. **Run the application**: `expo start`

## Contribution Guidelines

Contributions to enhance and refine the Porsche Service Application are encouraged. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request. -->

## Future Roadmap

- **Global Service Centers**: Expand the service center locations feature to include Porsche service centers in various regions.
- **Enhanced Navigation**: Implement point-to-point navigation for a more immersive and user-friendly experience.
- **Appointment Creation**: Enable users to schedule appointments with Porsche service centers directly through the mobile app, with calendar integration and push notifications.

<!-- ## License

This project is licensed under the [MIT License](LICENSE). -->
