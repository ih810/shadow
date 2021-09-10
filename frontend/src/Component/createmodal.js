import React from 'react'
import { connect } from 'react-redux'
import {addClassroom} from '../Redux/classroom/classroomAction'
import { Modal, ModalHeader, ModalBody, Form, ModalFooter } from 'reactstrap';


class PureModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            title: "",
            description: ""
        };
    }
    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);
    }
    submit = (e) => {
        e.preventDefault();
        this.props.createClassMDP(this.state.email, this.state.title, this.state.description)
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.classroom.modal} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.toggle}>Create Classroom</ModalHeader>
                    <ModalBody>
                        <Form>
                            <input onChange={this.onChangeField.bind(this, 'email')} value={this.state.email} type="text" name="username" className="form-control mb-4" placeholder="Email" />
                            <input onChange={this.onChangeField.bind(this, 'title')} value={this.state.title} type="text" className="form-control mb-4" placeholder="Classroom Title" />
                            <textarea onChange={this.onChangeField.bind(this, 'description')} value={this.state.description} type="text" style={{ resize: "none" }} className="form-control" placeholder="Classroom Description" />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.submit} type="submit" className="btn btn-outline-dark waves-effect w-100 mb-2">Create</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state in dashboard", state);

    return {

        user: state.dataStore.user,


    }
}

const mapDispatchToProps = dispatch => {
    return {
        createClassMDP: (email, title, description) => {
            dispatch(addClassroom(email, title, description))
        },

    }
}


export const CreateClassPopUp = connect(mapStateToProps, mapDispatchToProps)(PureModel)