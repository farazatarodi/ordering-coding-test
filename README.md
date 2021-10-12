# Introduction

This project is a coding test interview for Teamleader

## Starting the project

In the project directory, run

### `npm install`

installs the dependencies. Then you can run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Press 'a' to run all tests

## Project breakdown

The project was initiated using `create-react-app`

### Dependencies

> "@teamleader/ui": used for the typography, colors and icons\
> "react-testing-library" and "jest": used for testing\
> "react-counter-input": a component used for changing product quantity\
> "redux" and "react-redux": used for state management\
> "react-router" and "react-router-dom": used for routing\
> "redux-saga": used for async redux requests

### Usage

The project consists of two main part: sidebar and content. Sidebar is used for navigation and content is changed based on the route.\
There are three main pages: Customers, Orders and Products. Order details are in individual components, accessible through the main Orders page.\
To add products to orders you have to select the product in the Products page and then select the order from the dropdown menu. The add button will activate and you can add the product.\
To delete a product you have to go to the main Orders page and click on the 'Details' button. Each product in the order has a delete button.\
To change the quantity of a product in an order, after visiting the order's detail page, you can change the quantity using the counter input.\
To place an order, you can click the 'Place Order' button at the bottom of the order detail page. Make sure order has items, otherwise the button is disabled.\
You can navigate back to the Orders page using the 'Back' button under the title of the page.\
The displayed data are local and are imported from the api folder. In the presence of a backend, we can input the URL into redux-saga and it will fetch the data. The three orders data files were combined into one file for ease of use. If backend response is different, the Redux-Saga code can be changed accordingly.

### Performance

The components are desgined with the consideration of states and rerenders. It can be further optimized but it will be outside of the scope of this test (example: 'Place Order' button can be placed outside of the Order component to prevent unnecessary rerenders).\
Some data are passed as props to prevent accessing store multiple times. This approach depends on the scale and size of users and data, and can be optimized if necessary.\
Fetching and setting the data is done by Redux-Saga.

### Navigating the code

All files contain extensive details in the form of comments.\
All components except 'index.js' are in the 'components' folder.\
All CSS files except Teamleader styles are in the 'css' folder.\
All Redux and Redux-Saga files are in the 'redux' folder. Actions, reducers and sagas are divided into their own folders.\
All tests are in the 'tests' folder.
