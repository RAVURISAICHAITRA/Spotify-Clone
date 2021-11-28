export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirctUri = "http://localhost:3000/";
const clientId = "7508d35548c34218a68a9571afc0daa9";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl =()=>{
    return window.location.hash
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirctUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;