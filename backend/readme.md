
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


