# Usage

## Backend
1. `cd backend`;
2. `pip install -r requirements.txt`;
3. `python manage.py createsuperuser`;
4. `python manage.py runserver`;

## Frontend
1. `cd frontend`;
2. `npm install`;
3. `npm start`;
4. open browser http://localhost:3000;

# Prepare Backend Project

1. create env: `virtualenv env`;

2. activate env: `source env/bin/activate`;
    deactivate env: `deactivate`;

3. install some libraries: 
   1. `pip install django`;
   2. `pip install djangorestframework`;
   3. `pip install djangorestframework-simplejwt`;

4. start a django project: `django-admin startproject backend`;

5. start a django app: 

   1. `cd backend`;

   2. `python manage.py startapp base`

6. move `env` folder to `backend` folder.

7. The structure of the root folder `backend` is:
   ```
   ├── backend
   │   ├── backend
   │   │   ├── asgi.py
   │   │   ├── settings.py
   │   │   ├── urls.py
   │   │   └── wsgi.py
   │   ├── base
   │   │   ├── admin.py
   │   │   ├── apps.py
   │   │   ├── migrations
   │   │   ├── models.py
   │   │   ├── tests.py
   │   │   └── views.py
   │   └── manage.py
   ```

# Logic of Backend

1. create `api` folder in `base` folder and create `serializers.py, urls.py, views.py` files in the `api` folder:
    ```
   ├── backend
   │   ├── backend
   │   │   ├── asgi.py
   │   │   ├── settings.py
   │   │   ├── urls.py
   │   │   └── wsgi.py
   │   ├── base
   │   │   ├── admin.py
   │   │   ├── api
   │   │   │   ├── serializers.py
   │   │   │   ├── urls.py
   │   │   │   └── views.py
   │   │   ├── apps.py
   │   │   ├── migrations
   │   │   ├── models.py
   │   │   ├── tests.py
   │   │   └── views.py
   │   ├── db.sqlite3
   │   └── manage.py
    ```

2. if the error `No such Table ‘auth_user’` is occurred, run `python manage.py migrate`.

3. create superuser: `python manage.py createsuperuser`;

4. create user:
    ```python
    import django.contrib.auth
    User = django.contrib.auth.get_user_model()
    user = User.objects.create_user('username', password='userpassword')
    user.is_superuser = False
    user.is_staff = False
    user.save()
    ```
5. write some logic, please see those python files.

6. test the token api, open your browser: http://127.0.0.1:8000/api/token/

7. test the refresh token api, open your browser: http://127.0.0.1:8000/api/token/refresh


# Prepare Frontend Project

1. create frontend app: `npx create-react-app frontend`;

2. delete files: `index.css, logo.svg, reportWebVitals.js, setupTests.js, App.test.js`;

3. delete `App.css` contents;

4. create `pages, context, utils` folders in `src` folder.
   1. in `pages`, create `header.js, home.js, login.js` files.

   2. in `context`, create `AuthContext.js` file.

   3. in `utils`, create `PrivateRoute.jsx` file.

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

# Refrences

The above code is refrenced from Dennis's [video](https://www.youtube.com/watch?v=xjMP0hspNLE) and his [code](https://github.com/divanov11/refresh-token-interval).
