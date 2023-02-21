The tools that our backend consists of are express for the routing, mongoose for the data schema, mongoDB for the database, JWT for token authentication, and BCrypt for our password hashing. We split the backend in two, focusing on end routes for both seekers and posters on the platform. Get, Post, Put, and Delete routes were utilized so that seekers and posters can achieve basic functionality of creating, reading, updating (editing), and deleting posts on the website. Tables of the end points can be found below.


Post Endpoints


| Method  | Endpoint |
| ------------- | ------------- |
| GET  | all posts /index/all  |
| GET  | single post /index/:id  |
| POST  | create new post /index/ |
| PUT  | edit existing post /index/:id  |
| DELETE | post index/:id  |


User Endpoints


| Method  | Endpoint |
| ------------- | ------------- |
| GET  | all users /user/all  |
| GET  | single user /user/:id  |
| POST  | create new user /user/  |
| POST  | login user /user/login |
| PUT  | edit existing user /user/:id  |
| DELETE | post user/:id  |
# zeaaker_BK
