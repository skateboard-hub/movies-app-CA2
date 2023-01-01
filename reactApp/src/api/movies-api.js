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

export const addFavourite = (username, movie) => {
    return fetch(`/api/users/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie })
    }).then(res => res.json())
  };
  
  export const getFavourites = (username, id) => {
    return fetch(`/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get',
      body: JSON.stringify({id: id})
    }).then(res => res.json())
  };
  