# SpaceXData

# Project structure

````
src
 ├─> app
 │   ├── App.tsx - application 
 │   ├─> actions - saga actions interfaces/types
 │   ├─> components - react components
 │   ├── constants.ts - static data
 │   ├─> middleware - logger and saga's
 │   ├─> store - store defenition and reducers
 │   │   ├── configureStore.ts
 │   │   ├─> reducers
 │   │   └── rootReducer.ts
 │   ├── types.d.ts
 │   └─> utilities - additional function
 ├── index.html
 ├── index.tsx
 └─> test - test directory
````

Each coroner directory described as alias in webpack.config and tsconfig
