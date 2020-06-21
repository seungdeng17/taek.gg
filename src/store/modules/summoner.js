import { URL } from '@constants/url';

const GET_DATA_SUCCESS = 'summoner/GET_DATA_SUCCESS';
// const GET_DATA_ERROR = 'summoner/GET_DATA_ERROR';

export const getSummonerInfo = summonerName => async dispatch => {
    const response = await fetch(URL.SUMMONER_INFO(summonerName));
    const data = await response.json();
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
}

const initialState = {
    summonerInfoData: null,
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                summonerInfoData: action.payload,
            }
        default:
            return state;
    }
};

export default summoner;
