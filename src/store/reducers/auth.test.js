import * as actiontypes from '../actions/actionTypes';
import reducer from './auth';

describe('auth reducer', () => {
    let initialState = null;
    beforeEach(() => {
        initialState = {
            token: null,
            error: null,
            userId: null,
            loading: false,
            authRedirectPath: '/'
        }
    });

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should store token upon login', () => {
        expect(reducer(initialState, {
            type: actiontypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual(
            {
                token: 'some-token',
                error: null,
                userId: 'some-user-id',
                loading: false,
                authRedirectPath: '/'
            }
            )
    })

})