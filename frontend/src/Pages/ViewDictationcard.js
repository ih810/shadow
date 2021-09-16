import React from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

import { NavBar } from '../Component/navbar';
import { HeadingInput } from '../Component/headinginput';
import {QRModal} from '../Component/qrcode'
import classes from './ViewDictationcard.module.css'


class ViewDictationcard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            type:"dictationcard",
        }
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        console.log("Props IN VD", this.props);

        return (
            <div>
                <NavBar history={this.props.history} />
                <QRModal modal={this.state} toggle={() => this.toggle()}/>

                <div className={classes.viewdictationcard}>
                <div className="row d-flex p-4">
                    <div className="col-8">
                        <HeadingInput card={this.state} handleHeading={this.handleHeading} heading={this.state} />
                    </div>
                    <div className="col-4">
                        {/* <FormSubmit/> */}
                        <button cards={this.props.cards}>Create Card</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        {/* <StartDictation/> */}
                        <button className="p-5"  onClick={() => {  this.toggle(); }}>StartDictation</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticatedMSP: state.authStore.isAuthenticated
    }
}



const connectedViewDictationcard = connect(mapStateToProps, null)(ViewDictationcard)
export { connectedViewDictationcard as ViewDictationcard };