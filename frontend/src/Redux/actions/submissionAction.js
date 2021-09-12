import axios from "axios";

export const ADD_SUBMISSION_DICTATIONCARD = "ADD_SUBMISSION_DICTATIONCARD";
export const ADD_SUBMISSION_FLASHCARD = "ADD_SUBMISSION_FLASHCARD";
export const ADD_SUBMISSION_MULTIPLECHOICE = "ADD_SUBMISSION_MULTIPLECHOICE";
export const ADD_SUBMISSION_TRUEFALSE = "ADD_SUBMISSION_TRUEFALSE";

export const DELETE_SUBMISSION_DICTATIONCARD = "DELETE_SUBMISSION_DICTATIONCARD";
export const DELETE_SUBMISSION_FLASHCARD = "DELETE_SUBMISSION_FLASHCARD";
export const DELETE_SUBMISSION_MULTIPLECHOICE = "DELETE_SUBMISSION_MULTIPLECHOICE";
export const DELETE_SUBMISSION_TRUEFALSE = "DELETE_SUBMISSION_TRUEFALSE";

export const addSubmissionThunk = (submission) => async (dispatch) => {
    return axios.post("http://localhost:8080/api/card/submission", submission)
    .then(response => {
        console.log(response)
        if (submission.type === "dictation") {
            dispatch({
                type: ADD_SUBMISSION_DICTATIONCARD,
                payload: {user_id: submission.userId, dictationcard_id: submission.dictationcardId, dictationcardSubmission_id: submission.dictationcardSubmissionId, dictationcardSubmissionPath: submission.dictationcardSubmissionPath, dictationcardSubmissionStatus: true}
            })
        } else if (submission.type === "flashcard") {
            dispatch({
                type: ADD_SUBMISSION_FLASHCARD,
                payload: {user_id: submission.userId, flashcard_id: submission.flashcardId, flashcardSubmission_id: submission.flashcardSubmissionId, flashcardSubmissionRecording: submission.flashcardSubmissionRecording, flashcardSubmissionStatus: true}
            })
        } else if (submission.type === "multipleChoice") {
            dispatch({
                type: ADD_SUBMISSION_MULTIPLECHOICE,
                payload: {user_id: submission.userId, multipleChoice_id: submission.multipleChoiceId, multiplechoiceSubmission_id: submission.multiplechoiceSubmissionId, multipleChoiceSubmission: submission.multipleChoiceSubmission, multipleChoiceMarking: submission.multipleChoiceMarking, multipleChoiceStatus: true}
            })
        } else if (submission.type === "trueFalse") {
            dispatch({
                type: ADD_SUBMISSION_TRUEFALSE,
                payload: { user_id: submission.userId, trueFalse_id: submission.trueFalseId, truefalseSubmission_id: submission.truefalseSubmissionId, trueFalseSubmission: submission.trueFalseSubmission, trueFalseMarking: submission.trueFalseMarking, trueFalseSubmissionStatus: true}
            })
        }
    })
    .catch(err => console.log("Error: ", err))
}

export const deleteSubmissionThunk = (submission) => async (dispatch) => {
    return axios.delete("http://localhost:8080/api/card/submission", submission)
    .then(response => {
        console.log(response)
        if (submission.type === "dictation") {
            dispatch({
                type: DELETE_SUBMISSION_DICTATIONCARD,
                payload: {dictationcard_id: submission.dictationcardId, dictationcardSubmission_id: submission.dictationcardSubmissionId}
            })
        } else if (submission.type === "flashcard") {
            dispatch({
                type: DELETE_SUBMISSION_FLASHCARD,
                payload: {flashcard_id: submission.flashcardId, flashcardSubmission_id: submission.flashcardSubmissionId}
            })
        } else if (submission.type === "multipleChoice") {
            dispatch({
                type: DELETE_SUBMISSION_MULTIPLECHOICE,
                payload: {multipleChoice_id: submission.multipleChoiceId, multiplechoiceSubmission_id: submission.multiplechoiceSubmissionId}
            })
        } else if (submission.type === "trueFalse") {
            dispatch({
                type: DELETE_SUBMISSION_TRUEFALSE,
                payload: {trueFalse_id: submission.trueFalseId, truefalseSubmission_id: submission.truefalseSubmissionId}
            })
        }
    })
    .catch(err => console.log("Error: ", err))
}