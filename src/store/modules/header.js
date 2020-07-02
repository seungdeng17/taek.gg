const SHOW_HEADER_SEARCH_FORM = 'header/SHOW_HEADER_SEARCH_FORM';

export const showHeaderSearchForm = bOpen => ({ type: SHOW_HEADER_SEARCH_FORM, payload: bOpen });

const initialState = {
    bOpenHeaderSearchForm: true,
};

const header = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HEADER_SEARCH_FORM:
            return {
                ...state,
                bOpenHeaderSearchForm: action.payload,
            }
        default:
            return state;
    }
};

export default header;
