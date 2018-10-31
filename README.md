## search-master ##

**search-master** is a simple web application which includes and Express RESTful API server and a front end in AngularJS


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

Payload

School
```json
{
    "id": "id",
    "name": "name", 
    "address": "address",
    "city":"city",
    "state":"state",
    "country":"country",
    "boys": "100",
    "girls" : "200",
    "maleteacher":"10",
    "femaleteacher":"10",
    "type":"Public/Private/International",
    "daycare":"true",
    "prekg":"true",
    "kindergarden":"true",
    "primary":"true",
    "secondory" :"true",
    "high":"true",
    "starttime":"6 AM",
    "endtime":"6 PM",
    "website": "abc.com",
    "email": ["email1", "email2"],
    "phone": ["phone1", "phone2"],
    "likes": "TOTAL_LIKES", 
    "follows":[{"name":"username1"},{"name":"username2"}],
    "socialmedia":[{"facebook":"facebook_page"},{"pinterest":"pinterest_images"}],
    "reviews": [
        { 
        "user": {"display_name": "AAAA" },
            "service": {
                "rating": {
                    "rating": "5"
                },
                "review": "Excellent"
            }
        },
        { 
        "user": {"display_name": "BBBB" },
            "service": {
                "rating": {
                    "rating": "4"
                },
                "review": "Good"
            }
        },
        { 
        "user": {"display_name": "CCCC" },
            "service": {
                "rating": {
                    "rating": "3"
                },
                "review": "Average"
            }
        }
       ]
     }
```

User : 
```json
{
        "user_id" : "ABCDBWN",
        "password" : "ABCDBWN",
        "date_of_join" : "15/10/2010",
        "education" : "B.C.A.",
        "profession" : "DEVELOPER",
        "interest" : "MUSIC",
        "community_name" : [
                "MODERN MUSIC",
                "CLASSICAL MUSIC",
                "WESTERN MUSIC"
        ],
        "community_moder_id" : [
                "MR. BBB",
                "MR. JJJ",
                "MR MMM"
        ],
        "community_members" : [
                500,
                200,
                1500
        ],
        "friends_id" : [
                "MMM123",
                "NNN123",
                "OOO123"
        ],
        "ban_friends_id" : [
                "BAN123",
                "BAN456",
                "BAN789"
        ]
}

```

School :
```json
{
    "id":"58434da482139207a2bfbbab",
    "name" : "Padra High Schhol",
    "address" : "Statiion road",
    "city" : "Padra",
    "state" : "GJ",
    "students" : "60-131-9227",
    "teachers" : "92-994-1933",
    "email" : "jhernandez0@mapquest.com",
    "website" : "jhernandez0@miibeian.gov.cn",
    "phone" : "27-973-8142",
    "medium" : ["GSEB","CBSE","ICSE"]
}
```

Review :
```json
{
    "user": {
        "display_name": "Simon"
    },
    "service": {
        "rating": {
            "rating": "5"
        },
        "review": "Excellent"
    }
}
```

