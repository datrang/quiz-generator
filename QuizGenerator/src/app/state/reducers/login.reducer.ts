import { Action } from '@ngrx/store';
import * as LoginActions from '../actions/login.action';
import { UserInstance } from 'src/app/interfaces/user';

const initialState: UserInstance = {
    userName: "",
    score: 0
};

export function loginReducer(state: UserInstance = initialState, action: LoginActions.Actions){
    switch(action.type){
        case LoginActions.LOGIN:
            return {userName: action.payload.userName,
                    score: state.score}
        case LoginActions.LOGOUT:
            return initialState;
        default:
            return state;
    }
}