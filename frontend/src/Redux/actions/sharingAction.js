import axios from "axios";

export const ADD_SHARING = "ADD_SHARING";
export const DELETE_SHARING = "DELETE_SHARING";

export const addSharingThunk = (sharing) => async (dispatch) => {
    return axios.post("http://localhost:8080/api/sharing", sharing)
    .then(response => {
        console.log(response)
            dispatch({
                type: ADD_SHARING,
                payload: {id:{classroom_id: sharing.classroomId}, content:{id: sharing.userId, email: sharing.email, displayName: sharing.displayName}}
            })
    })
    .catch(err => console.log("Error: ", err))
}

export const deleteSharingThunk = (sharing) => async (dispatch) => {
    return axios.delete("http://localhost:8080/api/sharing", sharing)
    .then(response => {
        console.log(response)
            dispatch({
                type: DELETE_SHARING,
                payload: {email: sharing.email, classroom_id: sharing.classroomId}
            })
    })
    .catch(err => console.log("Error: ", err))
}