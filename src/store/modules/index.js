import { combineReducers } from "redux";
import summoner from './summoner';
import header from './header';
import rank from './rank';

const rootReducers = combineReducers({
    summoner,
    header,
    rank,
});

export default rootReducers;
