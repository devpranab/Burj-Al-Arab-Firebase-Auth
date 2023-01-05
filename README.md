# Burj-Al-Arab 
- Setup Ui Design
 - Header Component
 - Home Component
 - Book Component
- Firebase Authentication
- Get simple google login auth set
- Create user context to share it with multiple components
- Create private route to protect a path
- Another recap of firebase auth integration

# Secure a node api using jwt token
1. Introduction Secure a node api using jwt token
2. Create booking field and front end setup
3. create server connect mongodb and verify connection
4. send data to database and store in mongodb
5. load filtered data from database for a specific user
6. introduce JWT token and get jwt token on client 
We already done auth into client side, now we'll do from server side using jwt token that is strong authentication.  
https://firebase.google.com/docs/auth/admin/verify-id-tokens   
```js
//step1: 
Login.js const storeAuthToken = () => { 
    Retrieve ID tokens on clients code
    token save in sessionStorage
    call in  signInWithPopup
//step2: jwt.io tool - check info of token
//step3: Pass Header JWT Token with Axios & React
//Bookings.js

//https://stackoverflow.com/questions/51586458/how-to-pass-header-jwt-token-with-axios-react    
```

7. verify jwt token in the server end using firebase admin
https://firebase.google.com/docs/admin/setup  
```js
//step1: npm i firebase-admin & import server/index.js
//step2: Admin setup: To generate a private key file for your service account:
1. In the Firebase console, open Settings > Service Accounts.
2. Click Generate New Private Key, then confirm by clicking Generate Key.
3. Securely store the JSON file containing the key.
//step3: keep in index.js to Admin SDK configuration snippet code
//step4: path give that json file
//step5: keep Verify ID tokens using the Firebase Admin SDK code in app.get function with condition
//step6: if token verify then shown get data
```

8. send 401 unauthorized status and refresh token concept
9. set environment variable and hide sensitive information