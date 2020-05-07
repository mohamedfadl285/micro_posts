/**
 * MF-HTTP Library
 * Library for making HTTP requests with Fetch API
 *
 * @version 1.2.0
 * @author Mohamed Fadl
 * @license MIT
 *
 */

class mfHTTP {
  // Make HTTP Get Request
  async get(url) {
    const response = await fetch(url, { mode: "no-cors" });

    const resData = await response.json();
    return resData;
  }

  // Make HTTP Post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make HTTP Post Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make HTTP Post Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const resData = await "Deleted Successfully";
    return resData;
  }
}
