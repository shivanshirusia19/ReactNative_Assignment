# ReactNative_Assignment
# Persistance store & Network Calls

Design two screens : One will be a Signup Screen and other one will be Home Screen
1. Signup Screen UI : https://drive.google.com/file/d/1J-rqvY0JjCsyG-c_ybF53PCpd5IypzHz/view?usp=sharing 

On Click of Signup user will navigate to Home screen and details user details like name, email and phone should be saved as a JSON string in AsyncStorage which will be later used in home screen.

2. Home Screen : User's Name and Email will be displayed on the home screen  and there will be one Logout icon on the right of the header. On click of Logout an Alert will be shown where user will be asked to logout and will have two options Yes or No. On Click of Yes User will navigate back to Signup. Make sure to reset the navigation stack and also clear AsyncStorage

App Flow : On Initial Launch App will land on Signup Screen, After user signs up if user has not logged out from the app user will navigate to home screen always on app relaunch

Refer src -> components -> StackNavig.js for the code
