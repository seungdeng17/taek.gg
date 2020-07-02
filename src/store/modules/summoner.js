import { URL } from '@constants/url';
import { checkResponseData } from '@utils/util';

const GET_DATA_SUCCESS = 'summoner/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'summoner/GET_DATA_ERROR';

export const getSummonerInfo = summonerName => async dispatch => {
    try {
        const response = await fetch(URL.SUMMONER_INFO(summonerName));
        if (!checkResponseData(response)) throw (new Error(response.status));
        const data = await response.json();
        dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_DATA_ERROR, payload: error });
    }
}

const initialState = {
    bValidSummoner: false,
    summonerInfoData: null,
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                bValidSummoner: true,
                summonerInfoData: action.payload,
            }
        case GET_DATA_ERROR: {
            return {
                ...state,
                bValidSummoner: false,
            }
        }
        default:
            return state;
    }
};

export default summoner;
