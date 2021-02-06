# Music Festival

React application to show Music festival data . 

## How to run locally

Please use the following command for different actions:

### `npm install`

Use this to install all dependencies

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> Refresh the page to get different set of data from API. 



### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## CORS

Currently the app is proxying to `http://eacodingtest.digital.energyaustralia.com.au` using `proxy` settings in `package.json`. This is to resolve CORS issue which can occur while running the app in `dev` mode. The assumption is that in production API and App will be in same domain. 

If it is in different domain we can use `BASE_URL` which is provided in `service.ts`.

To run the App locally using `Offline Data` uncomment the code in line 8 in `service.ts`. Different set of data is maintained in `offline-data.ts`.

## Enhancements

Below are the list of enhancement possible for this project
* Add Promise and Response type for fetch API
* Currently application have almost 90% test coverage. Can make 100%. 