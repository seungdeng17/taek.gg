import { URL } from '@constants/url';

const RESET_STATE = 'rank/RESET_STATE';
const GET_DATA_SUCCESS = 'rank/GET_DATA_SUCCESS';

export const resetRankState = () => ({ type: RESET_STATE });

export const getSummonerRank = encryptedSummonerId => async dispatch => {
    const response = await fetch(URL.SUMMONER_RANK_INFO(encryptedSummonerId));
    const data = await response.json();
    const [soloRankData] = data.filter((rankData) => rankData.queueType === "RANKED_SOLO_5x5");
    const [teamRankData] = data.filter((rankData) => rankData.queueType === "RANKED_FLEX_SR");
    dispatch({ type: GET_DATA_SUCCESS, payload: { soloRankData, teamRankData } });
};

const initialState = {
    soloRankData: null,
    teamRankData: null,
};

const rank = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return {
                ...initialState,
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                soloRankData: action.payload.soloRankData,
                teamRankData: action.payload.teamRankData,
            }
        default:
            return state;
    }
};

export default rank;
