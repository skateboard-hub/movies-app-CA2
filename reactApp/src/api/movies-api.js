export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/tmdb/movie/${id}/images`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };
  
export const getUserFavourites = (username) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get',
    }).then(res => res.json())
};

export const addToUserFavourites = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }).then(res => res.json())
};
export const removeFromUserFavourites = (username, id) => {
    return fetch(`/api/users/${username}/favourites/remove`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }).then(res => {
        return res.json()
    })
};


export const getTopRatedMovies = ({ queryKey }) => {
    const [, pageNum] = queryKey;
    const { page } = pageNum;
    return fetch(
      `/api/movies/tmdb/topRated/${page}`,
    ).then(res => {
       return res.json();
    }).catch((error) => {
       console.log(error);
    });
  };

  export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };
  
  export const getPopularPeople = () => {
    return fetch(
      `/api/actors/popular`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };
  
  export const getPersonImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}/images`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  