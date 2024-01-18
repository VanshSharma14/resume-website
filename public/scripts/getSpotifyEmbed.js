const spotifyAuth = async (client_id, client_secret) => {
    // Encode client ID and client secret for authorization
    const base64Auth = btoa(`${client_id}:${client_secret}`);

    // Spotify API endpoint to obtain access token
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';

    // Spotify API endpoint to get currently playing track
    const currentlyPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';

    // Fetch access token
    fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64Auth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    })
    .then(response => response.json())
    .then(async data => { // Add 'async' keyword here
        const accessToken = data.access_token;

        // Fetch currently playing track
        await fetch(currentlyPlayingEndpoint, { 
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json()) 
        .then(async data => {
            console.log(data);
            if (data.item) {
                const trackUrl = `https://open.spotify.com/track/${data.item.id}`;
                // Fetch oEmbed data
                await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(trackUrl)}`)
                    .then(response => response.json())
                    .then(embedData => {
                        // Embed Spotify player on the webpage
                        const embedContainer = document.getElementById('SpotifyEmbed');
                        embedContainer.innerHTML = embedData.html;
                    })
                    .catch(error => console.error('Error fetching oEmbed data:', error));
            } else { 
                console.log('No track currently playing.');
            }
        })
        .catch(error => console.error('Error fetching currently playing track:', error));
    })
    .catch(error => console.error('Error fetching access token:', error));
}

export default spotifyAuth;

