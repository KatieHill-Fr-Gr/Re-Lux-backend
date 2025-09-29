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

This was a joint project with Tony Rodriguez on the General Assembly Software Engineering Bootcamp. We worked together via Zoom to design and build a RESTful API to support the complex functionality of a resale platform. We each took ownership of different features of the app and implemented additional routes and schemas which presented several challenges during the build. Overall, we managed to deliver a robust and secure API by the project deadline. 

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

Tony and I initially developed the API together, including the basic routes, Mongoose schemas (User and Item), user authentication, and custom error-handling: 

#### 1) User Authentication

Following best practices, we implemented user authentication first before building the CRUD operations:

- Created the /auth routes
- Developed the User model
- Implemented JWT-based authentication
- Added custom verifyToken middleware to protect authenticated routes
- Stored secret keys securely in the .env file

<img width="630" height="455" alt="Re-Lux_verifyToken" src="https://github.com/user-attachments/assets/fb875612-9275-4b9f-bf41-69e52875d528" />


#### 2) Item Listings

We then implemented full CRUD operations for the items listings: 

- Index (basic list view)
- Show (detail view)
- Create (new item form)
- Update (edit item form)
- Delete


#### 3) Error Handling

To standardise error handling, we created a helper file with custom error classes (using JavaScript’s built-in Error class) and an errorHandler middleware function to manage server errors:


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

#### 1) Item Types

When working on the category pages on the frontend, I realised that I needed to manage the product types from the backend. I defined the types directly in the Mongoose schema using an `enum`: 

<img width="641" height="365" alt="Re-Lux_itemtypes" src="https://github.com/user-attachments/assets/ae8fbae1-891c-46ce-97c5-35b23e2c6a7b" />

To populate the dropdown lists in the create and edit form components, I implemented a separate `/types` route that uses enumValues to dynamically retrieve the list of types from the schema: 

<img width="639" height="203" alt="Re-Lux_itemtypesroute" src="https://github.com/user-attachments/assets/1807a0b5-6a76-423f-8610-36b5ec319c91" />

This solution meant there was no need to hardcode the types on the frontend and ensured consistency across the app. 


## Wins

- JWT authentication for access control/user management
- Advanced error handling using custom classes & middleware
- Secure and maintainable Stripe integration 

These features were all built with reusability in mind, which means they can be adapted for future projects, too. 

## Key Learnings

Overall, this project was a great opportunity to learn more about data modelling and relationships, including: 

- How to structure a database with multiple entities
- How to use `populate` in MongoDB
- When and where to use references or embedded data

It also gave me a solid understanding of RESTful API design, including how to structure and implement routes as well as how to implement JWT-based authentication for secure API access. By integrating Stripe, I also learned how to handle secure payments and currency on the backend, including server-side validation of payment amounts. 

It was a pleasure working with Tony on both the frontend and backend. By building the API together and then working on separate features, we were able to optimise our productivity and deliver all the functionalities we had planned without any conflicts.


## Bugs

There are no known bugs on the backend. The API is working as expected. 


## Future Improvements

- Public user profiles displaying ratings and reviews
- Search & filter options (API endpoints, sorting options)
- Social features (messaging API, follow/unfollow endpoints)
- Real-time user notifications (backend events or WebSocket support)
- Inventory management (removing sold items from available listings)




