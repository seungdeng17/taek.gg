import championsData from '@data/champions.json';
import spellsData from '@data/spells.json';

export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const romanNumberConverter = (romanNumber) => {
    const romanNumbers = {
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4
    }
    return romanNumbers[romanNumber];
};

export const getChampionName = (championId) => {
    for (const [championName, value] of Object.entries(championsData.data)) {
        if (+value.key === championId) return championName;
    }
};

export const translateChampionName = (championName) => {
    return championsData.data[championName].name;
};

export const getSpellName = (spellId) => {
    for (const [spellName, value] of Object.entries(spellsData.data)) {
        if (+value.key === spellId) return spellName;
    }
};

export const getQueueType = (queueId) => {
    switch (queueId) {
        case 420: return '솔랭';
        case 430: return '일반';
        case 440: return '자유 5:5 랭크';
        case 450: return '무작위 총력전';
        default: return '기타';
    }
}

export const getDuration = (duration) => {
    const minute = Math.floor(duration / 60);
    const seconds = duration - (minute * 60);
    return `${minute}분 ${seconds}초`
}

export const getResultColor = (result) => {
    switch (result) {
        case '승리': return '#1a78ae';
        case '패배': return '#c6443e';
        default: return '#000';
    }
}

export const getKillstreak = (playerData) => {
    const killsKey = ["pentaKills", "quadraKills", "tripleKills", "doubleKills"];
    const matchedKillsKey = killsKey.reduce((acc, cur) => {
        if (acc === "" && playerData.stats[cur]) acc = cur;
        return acc;
    }, "");

    switch (matchedKillsKey) {
        case 'pentaKills': return '펜타킬';
        case 'quadraKills': return '쿼드라킬';
        case 'tripleKills': return '트리플킬';
        case 'doubleKills': return '더블킬';
        default: return null;
    }
}

export const getTeamTotalKills = (data, teamId) => {
    return data.filter(info => info.teamId === teamId).reduce((acc, cur) => {
        const kills = cur.stats.kills;
        return acc + kills;
    }, 0);
}