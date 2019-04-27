import initState from './initState';
import { TOGGLE_SIDEBAR } from '../components/actions/action-types';

const rootReducer = (state = initState, action) => {
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            sideBarVisibility: action.sideBarVisibility
        }
    }
    return state;
}

export default rootReducer;
