# Email Guesser Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

* [Node JS v16.xx](https://nodejs.org/en/download)
* [NPM v8.xx](https://docs.npmjs.com/cli/v8/commands/npm-install)

## External Libraries used

* [axios](https://axios-http.com/)
* [formik](https://formik.org/)

## Setup Instructions
1. Clone the repo and install the dependencies.
```bash
git clone git@github.com:junaid1840/email-guesser-frontend.git
```
2. Add environment variables in .env file
```bash
REACT_APP_BASE_URL=[Backend Base Url]
```
3. Install dependencies
```bash
npm install
```
4. Run project on local server
```bash
npm run start
```
5. Run tests
```bash
npm run test
```
6. Run tests with coverage
```bash
npm run test:coverage
```

## How application works
This single page application has a form which needs to be submit in order to populate results.
1. If the user has entered wrong values according to form. Respective error messages will appear against each field.
2. If user has submitted form with correct data and if the domain name matches with any sample domain then it will add up a record in table with `Found` status.
3. If there is no matching domain against the submitted data then a record will be added at top of the table with `Not Found` status.
Note: The domain should be exact match with the domain in sample data for example `google.com` not only `google`.

## How to improve
* We can further improve this application by allowing some flexibility for `google.com` vs `google`.
* Add dropdown of only known domains so there is always a success record.
* Add some checks to prevent showing duplicate records.
* More...