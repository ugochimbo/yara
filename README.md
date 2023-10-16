# Yara Coding Challenge

## Set Up (Docker)

Using docker, run the following command to build the image and run the container:

```bash
docker build -t yara-app .
``` 

```bash
docker run -p 3000:3000 yara-app
```

## Set Up (Without Docker)

```bash
yarn install 
```
```bash
yarn start 
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Es-lint

This project uses eslint to enforce code style. To run eslint, run the following command:

```bash
yarn lint 
```

## Prettier

This project uses prettier to format code. To run prettier, run the following command:

```bash
yarn format 
```

## Attribution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Map Marker Icon by [Freepik](https://www.freepik.com) from [https://www.flaticon.com/free-icons/location](https://www.flaticon.com/free-icons/location)
