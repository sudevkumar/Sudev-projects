export const execerciseOptions = {
  method: "GET",
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youTubeOptions = {
  method: "GET",
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  // params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const res = await fetch(url, option);
  const data = await res.json();

  return data;
};
