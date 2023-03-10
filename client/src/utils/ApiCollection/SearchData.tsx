import axios from 'axios';

export const getSearchData = async (userInput: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('spotify')}`,
      },
      params: {
        q: userInput,
        type: 'track',
        limit: 5,
      },
    });
    return response.data.tracks.items;
  } catch (err: any) {
    return err.response;
  }
};

export const refreshToken = () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('Authorization', `Basic ${process.env.REACT_APP_BASIC}`);
    myHeaders.append(
      'Cookie',
      '__Host-device_id=AQBkKwvSB5IdcmzoXWylnPnCq0Wqwi73hDkSz3Y_unl3D9aO3RDGjtbfY2TiOikhVP_p64uduBYWexoTUMm9qh0wOiamx9pRMfE; sp_tr=false'
    );

    const raw = '';

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    const response = fetch(
      `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${process.env.REACT_APP_REFRESH}`,
      requestOptions
    )
      .then((data) => data.json())
      .then((body) => localStorage.setItem('spotify', body.access_token));

    return response;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};
