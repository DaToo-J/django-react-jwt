# Prepare Frontend Project

1. create frontend app: `npx create-react-app frontend`;

2. delete files: `index.css, logo.svg, reportWebVitals.js, setupTests.js, App.test.js`;

3. delete `App.css` contents;

4. create `pages, context, utils` folders in `src` folder.
   1. in `pages`, create `header.js, home.js, login.js` files.

   2. in `context`, create `AuthContext.js` file.
      - `AuthContext_old.js` is related to the video of [Authentication & Refreshing Tokens Implementation](https://www.youtube.com/watch?v=xjMP0hspNLE);
      - `AuthContext.js` is related to the video of [Refreshing Tokens With Axios Interceptors](https://www.youtube.com/watch?v=16-1mTdGBoM&list=PL-51WBLyFTg1gPEHotYAhNAPsisChkyTc&index=2);

   3. in `utils`, create `PrivateRoute.jsx, axiosInstance.js, useAxios.js` file.
      - `axiosInstance.js, useAxios.js` is related to the video of [Refreshing Tokens With Axios Interceptors](https://www.youtube.com/watch?v=16-1mTdGBoM&list=PL-51WBLyFTg1gPEHotYAhNAPsisChkyTc&index=2);

5. the structure is:
   ```
   ── src
    ├── App.css
    ├── App.js
    ├── context
    │   └── AuthContext.js
    ├── index.js
    ├── pages
    │   ├── header.js
    │   ├── home.js
    │   └── login.js
    └── utils
        └── PrivateRoute.jsx
   ```
6. install some libraries:
   1. `npm install --save react-router-dom`;

   2. `npm install --save jwt-decode`;

   3. `npm install --save axios`;
   
   4. `npm install --save dayjs`;