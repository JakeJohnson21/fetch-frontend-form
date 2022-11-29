class Api {
  constructor() {
    this._baseUrl = "https://frontend-take-home.fetchrewards.com/form";
    this._headers = {
      "Content-Type": "application/json",
    };
  }
  // check each response if OK. Return res.json()
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getFormOptions() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
      // res.json()
    }).then((res) => this._getResponseData(res));
    // handle Error in app.js
  }

  postNewUser({ name, email, password, occupation, state }) {
    return fetch(`${this._baseUrl}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password, occupation, state }),
      // res.json()
    }).then((res) => this._getResponseData(res));
    // handle Error in app.js
  }
}

const api = new Api();

export default api;
