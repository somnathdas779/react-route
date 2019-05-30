import  { userService}  from '../services/user.service';
import  history  from '../middleware/history';
export const userActions = {
    signup
};


function signup(user) {
    return dispatch => {
        dispatch(request(user));

        userService.signup(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    
                }
            );
    };

    function request(user) { return { type: "REGISTER_REQUEST", user } }
    function success(user) { return { type: "REGISTER_SUCCESS", user } }
    function failure(error) { return { type: "REGISTER_FAILURE", error } }
}