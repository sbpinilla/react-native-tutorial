
const URL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=bb18cdc9044c763a4d756b5509d4e38e&format=json"


function getArtists() {

    return fetch(URL)
        .then(response =>response.json()) // formatear el resultado para que sea un json
        //.then (function(data){ return data.topartists.artist } ) // forma tradicional
        .then(data => data.topartists.artist ) //EMC 6 arrow function // navegar por el json del resultado
        .then(artists =>  artists.map( artist => {
            return {
                name:artist.name,
                imageT: artist.image[3]["#text"],
                like :200,
                comment:140
            }


        } ) )
    }

export { getArtists }


/*

"topartists": {
"artist": [
{
"name": "Radiohead",
"listeners": "4599518",
"mbid": "a74b1b7f-71a5-4011-9441-d0b5e4122711",
"url": "https://www.last.fm/music/Radiohead",
"streamable": "0",
"image": [
{
"#text": "https://lastfm-img2.akamaized.net/i/u/34s/97a3e5ec1a56662d6100a02343944c95.png",
"size": "small"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/64s/97a3e5ec1a56662d6100a02343944c95.png",
"size": "medium"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/174s/97a3e5ec1a56662d6100a02343944c95.png",
"size": "large"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/97a3e5ec1a56662d6100a02343944c95.png",
"size": "extralarge"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/97a3e5ec1a56662d6100a02343944c95.png",
"size": "mega"
}
]
},
{
"name": "Coldplay",
"listeners": "5230145",
"mbid": "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
"url": "https://www.last.fm/music/Coldplay",
"streamable": "0",
"image": [
{
"#text": "https://lastfm-img2.akamaized.net/i/u/34s/421cac7d8e42662f069c4b69e7934d7b.png",
"size": "small"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/64s/421cac7d8e42662f069c4b69e7934d7b.png",
"size": "medium"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/174s/421cac7d8e42662f069c4b69e7934d7b.png",
"size": "large"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/421cac7d8e42662f069c4b69e7934d7b.png",
"size": "extralarge"
},
{
"#text": "https://lastfm-img2.akamaized.net/i/u/300x300/421cac7d8e42662f069c4b69e7934d7b.png",
"size": "mega"
}
]
}]}

*/
