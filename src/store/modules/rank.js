import { URL } from '@constants/url';

const GET_DATA_SUCCESS = 'rank/GET_DATA_SUCCESS';
// const GET_DATA_ERROR = 'rank/GET_DATA_ERROR';

export const getSummonerRank = encryptedSummonerId => async dispatch => {
    const response = await fetch(URL.SUMMONER_RANK_INFO(encryptedSummonerId));
    const data = await response.json();
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
}

const initialState = {
    summonerRankData: null,
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                summonerRankData: action.payload,
            }
        default:
            return state;
    }
};

export default summoner;
