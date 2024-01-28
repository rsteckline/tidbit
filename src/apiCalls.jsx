function getNews() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=6caedfe4e93a416aa2a44571703532bf',
    )
    .then(resp => resp.json())
    .then(data => {return data;
    })
    .catch(error => {
      console.error("Error fetching news:", error);
    });
}

export default getNews;
