# Advance Expense Tracker CRUD Application with Redux Toolkit

### Installation and project setup (7.1)

#### Setup template server and react-app

### Summary of installation and project setup (7.1)

- Overview of hole project like what we do this project.
- It's a personal web tracker application with CRUD system. So, it's a full-stack react application
- You can add income or expense with perticular amount and it's list in bottom one by one.
- You can also calculate some another data.

### React User Interface (7.2)

#### Convert HTML template to React

- Add css style and image from provided data.
- Create some component from provided html template.
- Overall created component is Layout, Balance, Form, and Transactions related component.

### Create APIs (7.3)

#### Communicate with the server

- Create axiosInstance with base url.
- Create transactions API for CRUD operation.
- In transactions file created get, post, put, and delete API with hit transactions api.

### Thunks and Slices (7.4)

#### Write async thunks and create Slice

- Create four differenc thunk function for dirfferent work.
- And also create slice and every thun have three different case pending, fulfilled, and rejected.
- For edit and remove fulfilled case have some JS functionality.

### Add Transaction (7.5)

#### Feature - Adding new Transaction

- Edit form like add onChange, value , name, etc.
- Create changehadler function, in this function action dispatch occurs
- Now data is gone database with post api

### List Transactions (7.6)

#### Feature - Gettting list of Transactions

- Bring transactions data by useSelector in Transactions componenet.
- Handle all case like isLoadin, isError, and if data have then pass data Transaction component.
- Recive data as a props and show dynamically in Transaction component.

### Edit Transaction (7.7)

#### Feature - Editing Transaction

- When you click edit icon it's data is showing in form section. For this purpose we declare global state for set data ata first globally.
- After showing data in form it's will be updatable and also you can cancel update.
- Take reducer like editActive and editInActive reducer and work in form component like update edit mode on.

### Delete Transaction (7.8)

#### Feature - Deleting Transaction

- Add delete functionality and dispatch removeTransaction with passig id.
- But oen thing we need to remember that action.payload doesn't have id but action.meta.arg have id.
- So, when you filter after fulfilled remove you need to compare action.meta.arg

### Balance Calculation (7.9)

#### Feature - Calculate Final Balance
