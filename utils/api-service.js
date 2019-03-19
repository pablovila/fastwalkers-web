import "isomorphic-unfetch";

const API_URL = "https://www.speedrun.com/api/v1/";
const GAMES_ENDPOINT = "games";
const USERS_ENDPOINT = "users";

const request = async url => {
  const res = await fetch(url);
  if (!res.ok) throw "unexpected error";
  const json = await res.json();
  return json.data;
};

export const requestGames = async () => {
  const url = `${API_URL}${GAMES_ENDPOINT}?orderby=created&direction=asc`;
  return request(url);
};

export const requestGame = async gameId => {
  const url = `${API_URL}${GAMES_ENDPOINT}/${gameId}`;
  return request(url);
};

export const requestRecords = async gameId => {
  const url = `${API_URL}${GAMES_ENDPOINT}/${gameId}/records`;
  return request(url);
};

export const requestUser = async userId => {
  const url = `${API_URL}${USERS_ENDPOINT}/${userId}`;
  return request(url);
};
