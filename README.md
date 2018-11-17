## testli ##

**testli** is a simple web application which includes and Express RESTful API server and a front end in AngularJS


Setup

1. npm install
2. node server.js
3. Get endpoint from route table
4. 

JWT : 
1. http://localhost:4000/api/users
    HTTP POST method 
    payload
    ```  
    {
        "username": "alpeshrpatel@gmail.com",
        "password" :"password"
    }
    ```
2.    
    http://localhost:4000/api/token
    payload
    ```  
    {
        "username": "alpeshrpatel@gmail.com",
        "password" :"password"
    }
    ```
3. Get Token from Response. 

4. Use Token to make
    
    User id = Take it from mongo
    entityid = Take it from mongo

    End point :http://localhost:4000/api/review/<userid>/<entityid>

    Http Header : 
    [{"key":"authorization","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJiYmJiQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpYXQiOjE1MTc0NDE0MDN9.-zoXhAjMXUWnz_WoYT8hrt_3vRnbt7ttwvNU3kxpikk","description":""}]
    
    Payload : 
     {
     
        "entityid": "bbbbb@gmail.com",
        "comment" :"password"
    }




Social to share Button : 

http://plnkr.co/edit/TQoIJ2?p=preview

NOTE  :#Always user header : Content-Type : application/json for all request form postman.

```

