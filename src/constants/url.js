const API_KEY = process.env.REACT_APP_API_KEY

export const URL = {
    SUMMONER_INFO: (summonerName) => (process.env.REACT_APP_SUMMONER_INFO.replace('{summonerName}', summonerName) + API_KEY),
    SUMMONER_RANK_INFO: (encryptedSummonerId) => (process.env.REACT_APP_SUMMONER_RANK_INFO.replace('{encryptedSummonerId}', encryptedSummonerId) + API_KEY),
    SUMMONER_MATCH_LIST: (encryptedAccountId) => (process.env.REACT_APP_SUMMONER_MATCH_LIST.replace('{encryptedAccountId}', encryptedAccountId) + API_KEY),
    SUMMONER_MATCH_INFO: (matchId) => (process.env.REACT_APP_SUMMONER_MATCH_INFO.replace('{matchId}', matchId) + API_KEY),
}