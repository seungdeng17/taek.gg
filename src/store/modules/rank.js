import { URL } from '@constants/url';

const GET_DATA_SUCCESS = 'rank/GET_DATA_SUCCESS';

export const getSummonerRank = encryptedSummonerId => async dispatch => {
    const response = await fetch(URL.SUMMONER_RANK_INFO(encryptedSummonerId));
    const data = await response.json();
    const [soloRankData] = data.filter((rankData) => rankData.queueType === "RANKED_SOLO_5x5");
    const [teamRankData] = data.filter((rankData) => rankData.queueType === "RANKED_FLEX_SR");
    dispatch({ type: GET_DATA_SUCCESS, payload: { soloRankData, teamRankData } });
}

const initialState = {
    soloRankData: null,
    teamRankData: null,
};

const rank = (state = initialState, action) => {
    switch (action.type) {
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
