/* eslint-disable no-console */
const URI = 'https://tiktok33.p.rapidapi.com';
const HEADERS = {
  'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
  'x-rapidapi-key': '9ad776a4f3msh42a701b507c198fp1cf1d1jsnb6101720100e',
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

export const getUserFeed = async (name: string) => {
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
