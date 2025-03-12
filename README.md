# SpaceX_React Native App

This project is a mobile application that provides users with information about SpaceX launches, including details and the ability to favorite specific launches. Built using React Native and Expo, it offers a seamless cross-platform experience on both iOS and Android devices.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jshafeez/SpaceX_ReactNative-App.git
   cd SpaceX_ReactNative-App
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the Expo Development Server:**

   Launch the development server using Expo:

   ```bash
   npx expo start
   ```

4. **Run the Application:**

   - **On a Physical Device:** Install the Expo Go app from the App Store (iOS) or Google Play Store (Android). Scan the QR code displayed in your terminal or browser after starting the development server.

   - **On an Emulator/Simulator:** Ensure you have the appropriate emulator (Android) or simulator (iOS) set up. You can initiate the app on the emulator/simulator directly from the Expo interface.

For a detailed guide on creating and running your first Expo app, refer to the [Expo Documentation](https://docs.expo.dev/tutorial/create-your-first-app/).

## Features Implemented

- **Launch Listings:** Browse upcoming, past, successful, failure, and all SpaceX launches with essential details.
- **Launch Details:** View comprehensive information about each launch.
- **Favorites:** Mark launches as favorites and access them easily in a dedicated section.
- **Navigation:** Seamless navigation between different screens using React Navigation.


[Watch App Demo](https://github.com/user-attachments/assets/bdba6b51-f54b-43f4-94e0-2b9b182228f2)

![WhatsApp Image 2025-03-12 at 12 37 42_8fdda743](https://github.com/user-attachments/assets/5d856905-735d-42fe-b9f6-c6e4e4830bb9)
![WhatsApp Image 2025-03-12 at 12 37 42_7e63f35b](https://github.com/user-attachments/assets/af882bce-fc88-4eb4-a9a8-fc69abef7edf)
![WhatsApp Image 2025-03-12 at 12 37 42_9e13ea28](https://github.com/user-attachments/assets/1a881fb1-3b28-45dd-8a7c-73a2119b95cd)
![WhatsApp Image 2025-03-12 at 12 37 42_e042f354](https://github.com/user-attachments/assets/f0e8e034-fb79-4de3-b333-0520da412f07)
![WhatsApp Image 2025-03-12 at 12 37 43_a6352797](https://github.com/user-attachments/assets/20e72b25-df4b-43c3-ad6f-fe296414a1e7)
![WhatsApp Image 2025-03-12 at 12 37 43_097bfa4a](https://github.com/user-attachments/assets/f183dd77-5169-4a4c-b1ca-04860d78bafb)
![WhatsApp Image 2025-03-12 at 12 37 43_bebc72a5](https://github.com/user-attachments/assets/9506d77b-3b72-40f4-b1c9-3dc1d29b6380)
![WhatsApp Image 2025-03-12 at 12 37 44_42337beb](https://github.com/user-attachments/assets/7654f162-1973-40e8-b311-67221143f115)

## Technologies Used

- **React Native:** For building the mobile application.
- **Expo:** To streamline the development process and handle native components.
- **React Navigation:** For managing navigation within the app.
- **AsyncStorage:** To persist user favorites locally on the device.

## Challenges Faced and Solutions

1. **Performance Optimization with Complex Lists:**

   Handling large datasets, such as numerous launches, can lead to performance issues. To mitigate this, the `FlatList` component from React Native was utilized, which efficiently renders lists by recycling views and rendering only what's necessary.

2. **Native Module Integration:**

   Integrating certain native functionalities posed challenges. Leveraging Expo's APIs and community packages helped bridge gaps without delving into native code.

3. **Debugging Complexities:**

   Debugging in a cross-platform environment can be intricate. Utilizing React Native's debugging tools and Expo's development environment facilitated effective troubleshooting.

For a deeper dive into common challenges and solutions in React Native development, consider this [LinkedIn article](https://www.linkedin.com/pulse/common-react-native-challenges-solutions-issues-how-solve-pereira-gah1f).

## Future Improvements

- **Enhanced Error Handling:** Implement more robust error handling mechanisms to improve user experience.
- **Push Notifications:** Introduce notifications to alert users about upcoming launches or changes.
- **Offline Support:** Cache data to allow users to access information without an active internet connection.
- **UI/UX Enhancements:** Continuously refine the user interface and experience based on user feedback.

##Conclusion
With more time and effort, this app can evolve into an even more polished and feature-rich experience. Improvements like better error handling, push notifications, and offline support would make it more reliable and accessible. Additionally, refining the UI/UX based on user feedback would enhance usability. The goal is to create an app that SpaceX enthusiasts can rely on for accurate and up-to-date launch details—anytime, anywhere. 🚀
*Note: This README provides an overview based on the current state of the project and outlines potential future enhancements.*

