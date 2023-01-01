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

export const addFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id })
    }).then(res => res.json())
};

export const getFavourites = (username) => {
    return fetch(`api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get',
    }).then(res => res.json())
};

export const deleteFavourite = (username, movie) => {
    return fetch(`/api/users/${username}/movie/${movie.id}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post'
    }).then(res => res.json())
};

export const getGenres = () => {
    return fetch(
        '/api/genres',
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getTopRatedMovies = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(`/api/movies/topRated/${page}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getUpcomingMovies = ({ queryKey }) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    return fetch(`/api/movies/upcoming/${page}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovies = () => {
    return fetch(
        `/api/movies/`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/${id}/images`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};

export const getPeoples = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `/api/peoples/popular/${id}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getPeople = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/peoples/${id}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};


export const getPeopleImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
        `/api/peoples/${id}/images`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};


export const getMoviesByPage = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;

    return fetch(
        `/api/movies/page/${id}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    })
        .catch((error) => {
            throw error
        });
};

export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}`
    ).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
};

