# spotify-music
A small app based on Spotify API

<img src="https://i.ibb.co/L0TNfpV/Screenshot-93.png" alt="Screenshot-93" border="0">

<h1>Steps to run this App on your local machine</h1>

1.) Need to add .env file at the root level and then add the following env variables :- 
<ul>
<li>CLIENT_ID_SPOTIFY = {'YOUR CLIENT ID'}</li>
<li>CLIENT_SECRET_SPOTIFY = {'YOUR CLIENT SECRET'}</li>
<li>REDIRECT_URI = http://localhost:8888/callback/       // this url must be configured with spotify dashboard </li>
<li>REACT_DEV_APP_URL = http://localhost:4000         //development mode url</li>
<li>REACT_PROD_APP_URL = http://localhost:8000        //production mode url</li>
<li>SERVER_URL = http://localhost:8888                //auth-server url for spotify login</li>
<li>MODE = development   // When you are running the app in dev mode otherwise it must be production</li>
</ul>
2.) `yarn dev` to run app in development mode. <br/>
3.) `yarn build` to build the app in production-mode.<br/>
4.) `yarn start-server` to run auth-server for spotify login.<br/>
<br/>
use `yarn start-sever` ( no need to close terminal tab when auth-server is running) and then run `yarn dev` or `yarn build` in another terminal window.
<br/>
<b>server.js</b> file is to serve the app from final production build directory for that you need to change the .env variable `MODE` to `production` from `development` and then run `yarn start-server` followed by `yarn run-app`.
