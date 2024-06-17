
/*
const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 8.8, duration: 148 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6, duration: 169 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9.0, duration: 152 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 8.9, duration: 154 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 9.3, duration: 142 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2, duration: 175 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, rating: 8.7, duration: 136 },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8, duration: 139 },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, rating: 8.8, duration: 142 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: 2001, rating: 8.8, duration: 178 }
];


Na dadenata niza od objekti iskoristete gi foreach, filter, map, sort, some, every i find.
Pod sekoj primer sto ke go prikazete tekstualno zapiteste sto pravi samata metoda
i zosto vo toj primer ste ja iskoristile istata. */



/*
Bonus: 
- Kreirajte nova niza od objekti po vas izbor.
 Iskoristete nekolku od metodite i povtorete go istoto so tekstualnoto objasnuvanje 
 zosto ste gi iskoristile metodite. */




// foreach, filter, map, sort, some, every i find.

 const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 8.8, duration: 148 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6, duration: 169 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9.0, duration: 152 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 8.9, duration: 154 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 9.3, duration: 142 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2, duration: 175 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, rating: 8.7, duration: 136 },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8, duration: 139 },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, rating: 8.8, duration: 142 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: 2001, rating: 8.8, duration: 178 }
];



movies.forEach(function (movie) {
  console.log(movie.title);
});
// so foreach metodata ke gi prikaze site naslovi od filmovite vo nizata


const newMovies = movies.filter((movie) => movie.year > 2000);
console.log(newMovies);
//so metodata filter gi filtrirame filmovite sto se od 2000 godina i nagore

const mapedMovies = movies.map((movie) => movie.title + " - " + movie.director);
console.log(mapedMovies);
// so map metodata ke gi spoi so " - " naslovot i direktorot na filmovite 

const ratedMovies = movies.sort((a, b) => b.rating - a.rating);
console.log(ratedMovies);
// so sort metodata gi sortirame filmovite od najrangirani do pomalku rangirani

const greaterRating = movies.some((movie) => movie.rating > 9);
console.log(greaterRating);
// so some metodata ke proverime dali ima film so rating nad 9 sto vo nasiot slucaj ke vrati true

const checkMovies = movies.every((movie) => movie.year > 2000);
console.log(checkMovies); 
// every metodata ke proveri filmovite dali se site ponovi od 2000 god 

const moviesHighRating = movies.find((movie) => movie.rating > 9);
console.log(moviesHighRating);
// so find metodata ke ni go vrati prviot film koj sto ima rating nad 9





const albums = [
    { title: "Pet Sounds", artist: "The Beach Boys", year: 1966, rank: 1, genres: "Baroque Pop" },
    { title: "Nevermind", artist: "Nirvana", year: 1991, rank: 2, genres: "Grunge" },
    { title: "Revolver", artist: "The Beatles", year: 1966, rank: 3, genres: "Pop Rock" },
    { title: "The Velvet Underground & Nico", artist: "The Velvet Underground & Nico", year: 1967, rank: 4, genres: "Art Rock, Experimental Rock" },
    { title: "What's Going On", artist: "Marvin Gaye", year: 1971, rank: 5, genres: "Soul" },
    { title: "Sgt. Pepper's Lonely Hearts Club Band", artist: "The Beatles", year: 1967, rank: 6, genres: "Pop Rock, Psychedelic Pop" },
    { title: "London Calling", artist: "The Clash", year: 1979, rank: 7, genres: "Punk Rock" },
    { title: "OK Computer", artist: "Radiohead", year: 1997, rank: 8, genres: "Alternative Rock, Art Rock" },
    { title: "Blonde on Blonde", artist: "Bob Dylan", year: 1966, rank: 9, genres: "Folk Rock, Singer/Songwriter" },
    { title: "Exile on Main St.", artist: "The Rolling Stones", year: 1972, rank: 10, genres: "Blues Rock" }
];


albums.forEach(function (album) {
  console.log(album.title);
});
// so foreach metodata ke gi prikaze site naslovi od albumite vo nizata


const rankedAlbums = albums.filter((album) => album.rank >= 5);
console.log(rankedAlbums);
//so metodata filter gi filtrirame albumite sto se rangirano pogolemi ili ednakvo od 5

const mapedAlbums = albums.map((album) => album.title + " - " + album.artist);
console.log(mapedAlbums);
// so map metodata ke gi spoi so " - " naslovot i artist na albumite 

const ratedAlbums = albums.sort((a, b) => b.rank - a.rank);
console.log(ratedAlbums);
// so sort metodata gi sortirame albumite od pogolemiot rank do najmaliot

const albumYear = albums.some((album) => album.year > 2000);
console.log(albumYear);
// so some metodata ke proverime dali ima album koj sto e nad 2000 godina sto vo nasata niza nemam takov i ke vrati false

const checkAlbums = albums.every((album) => album.year < 2000);
console.log(checkAlbums); 
// every metodata ke proveri dali albumite se postari od 2000 god 

const newAlbum = albums.find((album) => album.year > 2000);
console.log(newAlbum);
// find metodata ke vrati undefined posto nema album ponov od 2000 god
