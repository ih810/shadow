import React from 'react';
import { connect } from 'react-redux'

import { getdataThunk } from '../Redux/actions/action'

import { QRModal } from '../Component/qrcode'
import { ViewDictationQuestion } from '../Component/ViewDictationQuestion'
import classes from './ViewDictationCard.module.css'


class ViewDictationcard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            correctDictationcard: [],
            correctQuestion: [],
            type: "dictationcard",
        }
    }

    componentDidMount() {
        this.props.getdata({ email: localStorage.getItem('email') })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cards.dictationcard.length > 0) {
            this.setState({
                correctDictationcard: this.props.cards.dictationcard.filter(dictation => dictation.id === parseInt(this.props.match.params.id))
            })
            const correctProps = nextProps.cards.dictationcard.filter(filter => filter.id === parseInt(this.props.match.params.id))
            this.setState({
                correctQuestion: correctProps[0]
            })

        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    navigateSubmission(e) {
        this.props.history.push({
            pathname: `/viewdictationCardSubmission/${this.props.match.params.id}`,
        })
    }
    navigateCanvas(e) {
        this.setState({
            showCanvas: true,
        })
        // this.props.history.push({
        //     pathname: `/viewdictationQuestion/${this.props.match.params.id}`
        // })
    }

    render() {
        console.log("state in VDC", this.state);
        return (
            <div className="page">

                <QRModal userId={this.props.user.id} pageId={this.props.match.params.id} modal={this.state} toggle={() => this.toggle()} navigate={(e) => this.navigateCanvas(e)} />
                <div className={classes.viewdictationcard}>
                    <div className="row d-flex p-4">
                        <div className="col-8">
                            <h1> {this.state.correctDictationcard.length > 0 ? this.state.correctDictationcard[0].dictationcardTitle : null}</h1>
                        </div>
                        <div className="col-4 justify-content-center align-items-center">
                            <button cards={this.props.cards} onClick={(e) => { this.navigateSubmission(e) }}>View Submission</button>
                        </div>
                    </div>

                    {this.state.showCanvas && <ViewDictationQuestion question={this.state.correctQuestion} dictation={this.state.correctDictationcard}/>}
                    {!this.state.showCanvas && <div className="row d-flex p-4">
                        <div className="col col-12 d-flex justify-content-center align-items-center">
                            <div className={classes.startbtncontainer}>
                                <span onClick={() => this.toggle()} className={classes.startbtn}> Start Dictation</span>
                            </div>
                        </div>
                    </div>}

                    <div className="row d-flex p-4">

                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.userStore.user,
        classrooms: state.classroomStore.classrooms,
        sets: state.setStore.sets,
        cards: state.cardStore.card,
        tags: state.tagStore.tags,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getdata: (email) => {
            dispatch(getdataThunk(email))
        },
    }
}


const connectedViewDictationcard = connect(mapStateToProps, mapDispatchToProps)(ViewDictationcard)
export { connectedViewDictationcard as ViewDictationcard };