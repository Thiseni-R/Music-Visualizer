// ============================
// Spotify Setup
// ============================

// Your app settings
const clientId = "056c899780fc4cd6ada33bd15ba5093c";  // your Client ID
const redirectUri = "http://127.0.0.1:3000/callback";    // must match in Spotify dashboard
const scopes = "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state user-read-currently-playing";

// Global vars
let token = null;
let player = null;
let deviceId = null;
let currentFeatures = null; // <-- store features for sketch.js

// ----------------------------
// Step 1: Login with Spotify
// ----------------------------
function loginWithSpotify() {
  const authUrl =
    `https://accounts.spotify.com/authorize` +
    `?client_id=${clientId}` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  window.location = authUrl;
}

// --
