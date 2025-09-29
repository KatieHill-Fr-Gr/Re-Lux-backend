# Re-Lux - A marketplace app with a sleek UI/UX design
by Katie Hill & Tony Rodriguez

<img width="1428" height="1344" alt="Re-Lux_deployedhomepage" src="https://github.com/user-attachments/assets/da5f3544-33c2-4df9-a92f-daeba05d6bc4" />

*Screenshot of dynamic homepage displaying the latest listings*


## Tech stack

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
  alt=“React” width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg"
  alt="Mongoose" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  alt="Express" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  alt="Node js" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
  alt="MongoDB" width="40" height="40"/>

## Timeframe

- **Duration** 7 days
- **Team** Joint project with Tony Rodriguez (TonyRod116 on GitHub)
- **Contributions** Backend development in Express/Node.js, RESTful API design & implementation, third-party service integration (MongoDB, Stripe), and custom middleware implementation for authentication & error-handling

## About

Re-Lux is a marketplace app where users can sell luxury goods, including designer clothing and high-end tech. It works in a similar way to apps like Vinted and Vestiaire Collective in that users can either make an offer on an item or add the item straight to their bag and proceed to checkout. The app also allows users to rate and review sellers, favourite items, and accept/reject offers on items they are selling. 

For this joint project on our General Assembly Software Engineering Bootcamp, Tony Rodriguez and I worked together via Zoom to design and build a RESTful API that was capable of handling the complex functionality of a resale platform. We each took ownership of different features of the app and implemented additional routes and schemas which presented several challenges during the build. Overall, we managed to deliver a robust and secure API by the project deadline. 

The API can be accessed here: https://re-lux-marketplace-api.netlify.app/

### Brief


Our brief was to build a MongoDB/Express/React/Node.js application with full CRUD that met the following criteria: 

- Backend built with Express.js and Node.js
- MongoDB used as a database management system
- JWT token-based authentication to sign up, sign in, and sign out users
- Authorization implemented across frontend and backend to esnure guest users are not able to create, update, or delete data
- At least two data entities in addition to the User model (one must have a relationship with the User model)
- Full CRUD functionality
- Public APIs that require secret keys must be access from the backend only

## Installation

For the backend, clone this repository and install the following packages:

For user authentication: 

```bash
npm install bcrypt
npm install jsonwebtoken
```

For environment variables:

```bash
npm install dotenv
```

For the payment gateway:

```bash
npm install stripe
```

For HTTP requests: 

```bash
npm install cors
npm install morgan
npm install serverless-http
```


## Planning 

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain-wordmark.svg" 
	alt="Trello" width="80" height="60" />


#### 1) Routing

We started by identifying all the endpoints for the user pages and also the items or products for sale:

<img width="1008" height="496" alt="Re-Lux_RoutingTables" src="https://github.com/user-attachments/assets/9dedd657-d646-49ee-aeae-432d3c474f21" />


#### 2) Data Relationships

We also decided on the basic Mongoose schemas we would use and mapped the relationships using dbdiagram.io: 


<img width="807" height="752" alt="Re-Lux_ERD" src="https://github.com/user-attachments/assets/7fbaae21-f1d2-4f66-a6cc-91934eac6376" />


#### 3) Project Management

Finally, I created a Trello board and added the reference materials, user stories, tasks to be completed throughout the week, and our stretch goals: 

<img width="1426" height="760" alt="Re-Lux_TrelloBoard" src="https://github.com/user-attachments/assets/7a91dae9-f281-4c3a-bb68-8dca80824cb5" />


## Build

We developed the initial routes, Mongoose schemas (User and Item), user authentication, and custom error-handling together. 

#### 1) User Authentication

Following best practices, we implemented user authentication first before building the CRUD operations:

- Created the /auth routes
- Developed the User model
- Implemented JWT-based authentication
- Added custom verifyToken middleware to check for a valid token

<img width="630" height="455" alt="Re-Lux_verifyToken" src="https://github.com/user-attachments/assets/fb875612-9275-4b9f-bf41-69e52875d528" />


#### 2) Item Listings

We implemented full CRUD operations for the items listings: 

- Index (basic list view)
- Show (detail view)
- Create (new item form)
- Update (edit item form)
- Delete


#### 3) Error Handling

To provide comprehensive error handling, we created a helper file errors.js using JavaScript classes and an errorHandler middleware to manage server errors:


<img width="646" height="480" alt="Re-Lux_errorhandling" src="https://github.com/user-attachments/assets/b2df3daf-7140-4583-aba3-dcc8574b5aa5" />


#### 4) Stripe Integration 

I took ownership of the payment gateway and implemented this on both the frontend and backend: 

- Added the STRIPE_SECRET_KEY to the .env file
- Created a /purchase-intent route 
- Calculated the order total server-side (in addition to frontend calculation) for security
- Created the paymentIntent which is then sent to Stripe for processing

<img width="606" height="256" alt="Re-Lux_StripeTotalCalculation" src="https://github.com/user-attachments/assets/a76c60b4-0f89-41c5-90ec-541ebd615b4b" />


<img width="637" height="158" alt="Re-Lux_StripePaymentIntent" src="https://github.com/user-attachments/assets/9c424922-6f29-4a40-aa9a-7423a28180b0" />


### Challenges


## Wins


## Bugs


## Key Learnings


## Future Improvements







