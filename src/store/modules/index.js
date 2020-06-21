import { combineReducers } from "redux";
import summoner from './summoner';
import header from './header';

const rootReducers = combineReducers({
    summoner,
    header,
});

export default rootReducers;
