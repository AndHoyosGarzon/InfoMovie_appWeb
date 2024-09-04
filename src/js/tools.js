export const urls = {
  urlMovies:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  urlSeries: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  urlPeoples: "https://api.themoviedb.org/3/trending/person/day?language=en-US",
};

export const optionsHeaders = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTg0YWYzYWZmMjRjZmJlMDRlMDE3OTNkYWNmN2E4MSIsIm5iZiI6MTcyNTMxODY5MS44ODI0NTQsInN1YiI6IjY2Nzc3ZjA4MmUyNGViMDI4OWFhNTAyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nga-9PotsNbiqsDF-LIUoCT36-sgBidR1W7MQSoctnw",
    "Content-Type": "application/json",
  },
};

