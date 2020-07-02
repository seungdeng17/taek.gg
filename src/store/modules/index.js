import { combineReducers } from "redux";
import summoner from './summoner';
import header from './header';
import rank from './rank';
import match from './match';

const rootReducers = combineReducers({
    summoner,
    header,
    rank,
    match,
});

export default rootReducers;
