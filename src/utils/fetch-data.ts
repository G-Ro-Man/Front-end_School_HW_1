/* eslint-disable no-console */
const URI = 'https://tiktok33.p.rapidapi.com';
const HEADERS = {
  'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
  'x-rapidapi-key': '1ec67dc736msh6d8439d09719afep1aad27jsn028d07147690',
};

export const getTrendingFeed = async () => {
  try {
    const response = await fetch(`${URI}/trending/feed`, {
      method: 'GET',
      headers: HEADERS,
    });
    return await response.json();
  } catch (error) {
    console.error('error: ', error);
    return [];
  }
};

export const getUserInfo = async (name: string | undefined) => {
  try {
    const response = await fetch(`${URI}/user/info/${name}`, {
      method: 'GET',
      headers: HEADERS,
    });
    return await response.json();
  } catch (error) {
    console.error('error: ', error);
    return {};
  }
};

export const getUserFeed = async (name: string | undefined) => {
  try {
    const response = await fetch(`${URI}/user/feed/${name}`, {
      method: 'GET',
      headers: HEADERS,
    });
    return await response.json();
  } catch (error) {
    console.error('error: ', error);
    return [];
  }
};
