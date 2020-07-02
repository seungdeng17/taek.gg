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