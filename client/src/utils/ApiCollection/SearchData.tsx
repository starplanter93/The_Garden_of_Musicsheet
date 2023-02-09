import axios from 'axios';
import token from '../../spotify-token.json';

export const getSearchData = async (userInput: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
      params: {
        q: userInput,
        type: 'track',
        limit: 10,
      },
    });
    return response.data.tracks.items;
  } catch (err: any) {
    console.log(err);
    return err.response;
  }
};

export const refreshToken = async () => {
  await axios
    .post('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic' +
          new Buffer(
            process.env.REACT_APP_SECRET + ':' + process.env.REACT_APP_SECRET
          ).toString('base64'),
      },
      data: {
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      },
    })
    .then((data) => console.log(data));
};
