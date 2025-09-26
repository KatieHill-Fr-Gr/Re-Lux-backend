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

For this joint project on our General Assembly Software Engineering Bootcamp, Tony Rodriguez and I worked together via Zoom to design and build a RESTful API that was capable of handling the complex functionality of a resale platform.  We then each took ownership of different features of the app and implemented additional routes and schemas accordingly. 

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

For error-handling:

```bash
npm install morgan
```

For the payment gateway:

```bash
npm install stripe
```

For HTTP requests: 

```bash
npm install cors
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

Finally, I created a Trello board and added the reference materials, user stories, tasks to be completed throughout the week, and our stretch goals for the future: 

<img width="1426" height="760" alt="Re-Lux_TrelloBoard" src="https://github.com/user-attachments/assets/7a91dae9-f281-4c3a-bb68-8dca80824cb5" />


## Build

We developed the initial routes, Mongoose schemas, user authentication, and error-handling together.




