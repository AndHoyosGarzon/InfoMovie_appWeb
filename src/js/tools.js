export const urls = {
  urlTrendingMovies:
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  urlMovies:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
  urlTrendingSeries:
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  urlSeries: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  urlPopularActors:
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
  urlPeoples: "https://api.themoviedb.org/3/person/popular?language=en-US&page=5",
};

export const optionsHeaders = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTg0YWYzYWZmMjRjZmJlMDRlMDE3OTNkYWNmN2E4MSIsIm5iZiI6MTcyNTMxODY5MS44ODI0NTQsInN1YiI6IjY2Nzc3ZjA4MmUyNGViMDI4OWFhNTAyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nga-9PotsNbiqsDF-LIUoCT36-sgBidR1W7MQSoctnw",
    "Content-Type": "application/json",
  },
};
