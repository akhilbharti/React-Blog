import _ from 'lodash';
import JsonPlaceholder from '../apis/jsonPlaceholder';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = ()=> async (dispatch, getState) =>{
    await dispatch(fetchPost());
    // const userIds = _.uniq(_.map(getState().posts,'userId'));
    // userIds.forEach(id =>dispatch(fetchUser(id)));

    //allows to chain multiple function
    _.chain(getState().posts)
        .map('userId').uniq().forEach(id =>dispatch(fetchUser(id)))
        .value();

};

export const fetchPost =  () => async (dispatch) => {
        const response = await JsonPlaceholder.get('/posts');
    
    dispatch({ type:'FETCH_POST', payload: response.data })
    };

export const fetchUser = (id) =>async dispatch => {
//    _fetchUser(id,dispatch);

        const response = await jsonPlaceholder.get(`/users/${id}`);

     dispatch({type: 'FETCH_USER', payload:response.data});
};

//exactly fetches once users 
// const _fetchUser =_.memoize(async(id,dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload:response.data});
// });