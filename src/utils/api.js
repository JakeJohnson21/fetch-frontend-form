class Api {
  constructor() {
    this._baseUrl = "https://frontend-take-home.fetchrewards.com/form";
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getFormOptions() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  postNewUser({ name, email, password, occupation, state }) {
    return fetch(`${this._baseUrl}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, email, password, occupation, state }),
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api();

export default api;
