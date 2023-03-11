const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`'Ошибка' : ${res.status}`);
};

const config = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YyZWMzMzNhYTI4NTAzNGY3OGFjYjkiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2Nzc1MDcyOTYsImV4cCI6MTcwOTA0MzI5Nn0.Xjwaj30azyeyo7fypFnD76QzdjtGarKhm_4k_Z8bCZU',
  },
};

class Api {
  constructor({ baseUrl, headers }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
    }
    getProductsList() {
      return fetch(`${this._baseUrl}/products`, { headers: this._headers }).then(
        onResponse
      );
    }
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
        onResponse
      );
    }

    search(searchQuery) {
      return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
        headers: this._headers,
      }).then(onResponse);
    }

    setUserInfo(dataUser) {
      console.log({ dataUser });
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(dataUser),
      }).then(onResponse);
    }

    changeLikeProduct(productId, isLike) {
      return fetch(`${this._baseUrl}/products/likes/${productId}`, {
        method: isLike ? 'DELETE' : 'PUT',
        headers: this._headers,
      }).then(onResponse);
    }
  
    getProductById(idProduct) {
      return fetch(`${this._baseUrl}/products/${idProduct}`, {
          headers: this._headers
      }).then(onResponse)
  }
  }
  
  
  const api = new Api(config);
  
  export default api;
  