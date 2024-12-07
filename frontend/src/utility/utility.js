export function unauthorized(code) {
  if (code === 401) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/login";
  }
}

export function setToken(name, value) {
  return localStorage.setItem(name, value);
}

export function getToken(name) {
  return localStorage.getItem(name);
}

export function removeToken(name) {
  return localStorage.removeItem(name);
}
