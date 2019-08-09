# Understanding Victor Zhou's tutorial
I have to know it so well, it becomes mine, that way I can bend this code to my will.
## Initial packages
Express for server, socket.io for realtime client-server communication, webpack mainly for client side module bundling.

## File structure
### public/
public/assets contains the assets needed for client side. ### src/
src/client, and src/server are self explanatory. src/shared contains files that are used by both client and server, it uses CommonJS (module.exports) since server doesn't
use ES6 exports. 

## Webpack config files
webpack.common.js is the config needed for both development and production. The entry at src/client/index.js is stated, and
the bundled js if specified. That way we can host the client using express static. The package HTMLWebpackPlugin is used for
bundling the index file for static loading. MiniCSSExtractPlugin extracts the css file so it can be used during static loading.
webpack.dev.js and webpack.prod.js has development and production specific configurations that are merged with webpack.common.js.

## Client side base
### index.js
index.js is the webpack entrypoint. It connects to the server, downloads assets, and then prepares the game to load and capture inputs.
### networking.js
Makes a socket connection to the server. Once connected, it registers socket callbacks for game update, defeat, and disconnect. Contains
play, and updateDirection functions in order to send play messages to the server.
### assets.js
Contains a list of all the assets needed, and provides functions used to download and retrieve them.
### render.js
Handles the canvas on the index page. Fetches the state from state.js and renders according to the user's position. Exposes function to
start and stop rendering which is just starting and stopping the interval to render the canvas;
