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