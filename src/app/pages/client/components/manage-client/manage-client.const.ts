export const GRANT_TYPE = [{
  text: 'authorization code',
  value: 'authorization_code'
}, {
  text: 'client credentials',
  value: 'client_credentials'
}, {
  text: 'password',
  value: 'password'
}, {
  text: 'implicit',
  value: 'implicit'
}/*, {
    text: 'refresh token',
    value: 'refresh_token'
}*/];

export const RESPONSE_TYPE = [{
  text: 'CODE',
  value: 'code'
}, {
  text: 'TOKEN',
  value: 'token'
}, {
  text: 'ID_TOKEN',
  value: 'id_token'
}];

export const SUBJECT_TYPE = [{
  text: 'Public',
  value: 'PUBLIC',
  checked: true
}, {
  text: 'Pairwise',
  value: 'PAIRWISE'
}];
