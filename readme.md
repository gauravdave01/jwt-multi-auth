# Using Multi-Auth + JWT with Laravel 5.6

This application is based on implementation and application of Multi-Auth and JWT Token based authentication.

In **layman's term**, this respository handles a multi-role login portal and host Mobile API(s) with token authentication.

----

I've created 2 portals, which will have register and login functionality:
  1. Admin
  2. User

### 1. Admin:
- This is very generic admin portal, you can use register feature to create an admin. Since, this is an demo application, I've kept the registration of admin the way it was.
- If you're planning to implement this in your project, then you have to remove the registration feature and create admin user through database seeder or insert admin username and password in the database migration or some secure way to insert admin user(s). 

### 2. User Portal
 - This portal consists of laravel basic auth features (i.e. register/login/logout). Apart from that, I've implemented JWT only for this portal. So, a user can register himself/herself using either hosted website or through API(s).
 - Using account creation from site is pretty much simple and straight forward. 
 - When we talk of consuming mobile APIs, you need to register and validate user email and then when a user logs in to the system. JWT will create a token with an expiration time. Now, the expiration time is the time after which the token is no longer functional. In this repository token get expired after an hour. You can increase or decrease it's time as per your project needs.
 - Once you have the token from the login API. You'll have to store that token into presistent storage, provided by Android and Swift. Later, that token will be used to access auth restricted data API(s).
 - When token gets expired, you'll have to create a new token, for which you can refer **api/refresh** API endpoint and send it to user's device and that token will overwrite expired token.
- This feature is developed in a way that user credentials will work for both desktop and mobile format.

### Tech

This repository uses a two open source projects:
* [Hesto Multi-Auth] - implements multi auth system (you can even implement its domain based auth)
* [JWT] - Token based authentication system

### Installation
Install the dependencies and devDependencies.

```sh
$ cd jwt-multi-auth/Source
$ php artisan key:generate
$ php artisan migrate
```

When you want to implement desgin and other feature which needs styling and script compilation, then you have to use Gulp or Webpack. This has Webpack inbuilt, but if you're comfortable with Gulp, then you've to add gulp based packages in `package.json` file, then you have perform:

### Webpack
```sh
$ npm install
$ npm run watch
```
OR
### For Gulp
```sh
$ npm install
$ gulp
$ gulp watch
```
   [Hesto Multi-Auth]: <https://github.com/Hesto/multi-auth>
   [JwT]: <https://github.com/tymondesigns/jwt-auth>