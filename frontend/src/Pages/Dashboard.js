import React from 'react';
import { connect } from 'react-redux'

// import { Link } from 'react-router-dom';
import { getdataThunk } from '../Redux/getdata/action'
import '../Component/main.css'
import { NavBar } from '../Component/navbar'
import { CreateClassPopUp } from '../Component/createmodal'
// import { CreateSetPopUp } from '../Component/createsetmodal'

import { DisplayClassModule } from '../Component/displayclassmodule'
import { DisplaySetModule } from '../Component/displaysetmodule'



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            type: ""
        };
    }
    componentDidMount() {
        this.props.getdata({ email: this.props.user.email })
    }

    toggle() {
        console.log('t')
        this.setState({
            modal: !this.state.modal,
        });
    }
    changeTypeClass(){
        console.log('ctc')
        this.setState({
            type: "class"
        })
    }
    changeTypeSet(){
        console.log('cts')
        this.setState({
            type: "set"
        })
    }
    render() {
        return (
            <div>
                <NavBar user={this.props.user} />

                <div className="p-3">
                    <div className="row d-flex p-4">
                        <div className="col ">
                            <CreateClassPopUp create={this.state} toggle={() => this.toggle()}/>
                            <span className="d-inline-flex "><h2 className="p-2 m-0">My Classroom</h2><span onClick={() => { this.changeTypeClass(); this.toggle(); }} className="btn rounded-pill border border-warning p-2"><i className="fas fa-plus"></i></span></span>
                        </div>
                    </div>
                    <DisplayClassModule classrooms={this.props.classrooms} />
                    <div className="row d-flex p-4">
                        <div className="col ">
                            <CreateClassPopUp create={this.state} toggle={() => this.toggle()} />
                            <span className="d-inline-flex "><h2 className="p-2 m-0">My Set</h2><span onClick={() => { this.changeTypeSet(); this.toggle(); }} className="btn rounded-pill border border-warning p-2"><i className="fas fa-plus"></i></span></span>
                        </div>
                    </div>
                    <DisplaySetModule sets={this.props.sets} />
                    {this.props.loading && <div> Loading...</div>}
                    {this.props.error && <div> Oops! Something Wrong with Our Server</div>}

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log("state in dashboard", state);

    return {
        loading: state.dataStore.loading,
        error: state.dataStore.error,
        user: state.dataStore.user,
        classrooms: state.dataStore.classrooms,
        sets: state.dataStore.sets,
        cards: state.dataStore.cards,
        tags: state.dataStore.tags,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getdata: (email) => {
            dispatch(getdataThunk(email))
        }
    }
}


const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export { connectedDashboard as Dashboard };