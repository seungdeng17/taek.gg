import { URL } from '@constants/url';

const MATCH_DATAS_INTERVAL = 2;

const RESET_STATE = 'match/RESET_STATE';
const GET_DATA_START = 'match/GET_DATA_START';
const GET_DATA_END = 'match/GET_DATA_END';
const GET_MATCH_LIST_DATA_SUCCESS = 'match/GET_MATCH_LIST_DATA_SUCCESS';
const GET_MATCH_DATAS_SUCCESS = 'match/GET_MATCH_DATAS_SUCCESS';

export const resetMatchState = () => ({ type: RESET_STATE });

export const getMatchListData = encryptedAccountId => async dispatch => {
    const response = await fetch(URL.SUMMONER_MATCH_LIST(encryptedAccountId));
    const data = await response.json();
    dispatch({ type: GET_MATCH_LIST_DATA_SUCCESS, payload: data });
    dispatch(getMatchDatas(0, MATCH_DATAS_INTERVAL, data));
};

export const getMatchDatas = (startIndex, endIndex, matchData) => async dispatch => {
    dispatch({ type: GET_DATA_START });
    const matchDatas = [];
    for (let i = startIndex; i < endIndex; i++) {
        const response = await fetch(URL.SUMMONER_MATCH_INFO(matchData.matches[i].gameId));
        const data = await response.json();
        matchDatas.push(data);
    }
    dispatch({ type: GET_MATCH_DATAS_SUCCESS, payload: matchDatas });
    dispatch({ type: GET_DATA_END });
};

const initialState = {
    bLoading: true,
    matchData: null,
    matchesInfo: [],
    index: {
        start: 0,
        end: MATCH_DATAS_INTERVAL,
    },
}

const match = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return {
                ...initialState,
            }
        case GET_DATA_START:
            return {
                ...state,
                bLoading: true,
            }
        case GET_DATA_END:
            return {
                ...state,
                bLoading: false,
            }
        case GET_MATCH_LIST_DATA_SUCCESS:
            return {
                ...state,
                matchData: action.payload,
            }
        case GET_MATCH_DATAS_SUCCESS:
            return {
                ...state,
                matchesInfo: [...state.matchesInfo, ...action.payload],
                index: {
                    start: state.index.start + MATCH_DATAS_INTERVAL,
                    end: state.index.end + MATCH_DATAS_INTERVAL,
                }
            }
        default:
            return state;
    }
}

export default match;