# SpaceXData

**DEMO PAGE**
[shushanskii.github.io](https://shushanskii.github.io/)

## Run commands

- **npm run start** - run development mode
- **npm run build** - build application
- **npm run lint** - run eslint with _fix_ option
- **npm run storybook** - run storybook locally
- **npm run build-storybook** - build storybook
- **npm run test** - run tests

## Project structure

````
__test__ - test directory
src
 ├─> app
 │   ├── App.tsx - application 
 │   ├── constants.ts - static data
 │   ├─> actions - saga actions interfaces/types
 │   ├─> components - react components
 │   ├─> middleware - saga's and loger
 │   ├─> store - store defenition and reducers
 │   │   ├── configureStore.ts
 │   │   ├─> reducers
 │   │   └── rootReducer.ts
 │   ├── types.d.ts
 │   └─> utilities - additional function
 ├── index.html
 ├── index.tsx
````

Each coroner directory described as alias in webpack.config and tsconfig

## Task notes

1. I didn't quite understand what the two sections on the main page mean and made two buttons with a page selection
2. Unfortunately, api.spacexdata.com doesn't support filtering launches by mission name. Instead of it, I decided made filter by manufactures.
3. The choice of data for sending is implemented using the button

## Conceptions

0. Language - **TypeScript**
1. This is simple React application.
2. Navigation based on **ReactRouter**
3. Styles made with by **StyledComponents**
4. Application store - **Redux**, side effects manage - **Redux-Saga**
5. Components playground - **Storybook ver. 6**
6. Test environment - **Jest**
7. Date picker - **@datepicker-react/styled**
8. The app supports changing the screen width

## Known issues

0. _Application doesn't work in IE_
1. DatePicker - no reset controls
2. Linked lists Orbits and Rockets - not all corner case described
3. Not all tests described
4. Not all stories described
