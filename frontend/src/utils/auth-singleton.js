const auth = {}

function loadAuthToken() {
  const authToken = localStorage.getItem('current_auth_token')
  auth.token = authToken
  if (Boolean(authToken) === false) setTimeout(loadAuthToken, 200)
}

function setAuthToken(authToken) {
  localStorage.setItem('current_auth_token', authToken)
  auth.token = authToken
}

function getAuthToken() {
  return auth.token
}

function resetAuthToken() {
  localStorage.clear()
  auth.token = null
}

export {loadAuthToken, setAuthToken, getAuthToken, resetAuthToken}
