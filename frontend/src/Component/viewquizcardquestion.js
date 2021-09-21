import React from 'react';
import { connect } from 'react-redux'
import classes from './viewquizcardpage.module.css'

class PureViewQuizcardQuestionModule extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            type: 'mc',
            border: ""
        }
    }


    onClickShowQuestionViewer(id) {
        this.setState({
            showQuestionViewer: true,
            questionNumId: id,
        })

    }

    handleCorrect(e, marking){
        if (marking){
            this.setState({
                border: "3px solid ##2F922"
              })
        }else{
            this.setState({
                border: "3px solid #FF3333"
              })
        }
    }





    render() {
        return (
            <>

                <div className={classes.scrollicon} >
                    <div className="row" >

                        {this.props.question.question &&
                            this.props.question.question.length > 0 ?
                            this.props.question.question.map(

                                (question, i) => {
                                    if (i === 0) {
                                        return (
                                            <span key={i} onClick={() => this.onClickShowQuestionViewer(i)}>{i + 1}</span>
                                        )
                                    } else {
                                        return (
                                            <span key={i} onClick={() => { this.onClickShowQuestionViewer(i) }}>{i + 1}</span>
                                        )
                                    }
                                }
                            )

                            : null}
                    </div>
                    <div className="col col-4 ">
                        <button className={classes.viewsubmit} cards={this.props.cards} onClick={(e) => { this.props.navigate(e) }}>View Submission</button>
                    </div>
                </div>
                <div className={classes.viewquizcardquestion}>

                    {/* List of words & recording */}
                    <div className={classes.listframe}>
                        <div className="row d-flex ">


                            <div className="col col-12">

                                <div className="row">
                                    <div className="col col-8">
                                        <p>Question {this.state.questionNumId ? this.state.questionNumId + 1 : null}</p>
                                    </div>

                                </div>


                                {this.props.question.question &&
                                    this.props.question.question.length > 0 ?
                                    this.props.question.question.map((question, i) => {

                                        if (question.questionType === "multipleChoice" && i === this.state.questionNumId) {
                                                    console.log("questionquestionquestion in lin 80",question.multipleChoiceAnswer === "a");
                                            return (
                                                <div key={i} className={classes.viewquizcardanswer}>

                                                    <div key={i} className="row">
                                                        <div>{question.questionBody}</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col col-6">
                                                            <label htmlFor="A">Choice A</label>
                                                            <button style={{border: this.state.border}} onClick={(e)=>{this.props.addAnswer(question.id, "a") ; this.handleCorrect(e, question.multipleChoiceAnswer === "a")}} readOnly type="text" name="A" id="A" >{question.multipleChoiceA}</button>
                                                        </div>
                                                        <div className="col col-6">
                                                            <label htmlFor="A">Choice B</label>
                                                            <button style={{border: this.state.border}} onClick={(e) => {this.props.addAnswer(question.id, "b");this.handleCorrect(e, question.multipleChoiceAnswer ==="b")}} readOnly type="text" name="B" id="B" >{question.multipleChoiceB}</button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col col-6">
                                                            <label htmlFor="A">Choice C</label>
                                                            <button style={{border: this.state.border}} onClick={(e) => {this.props.addAnswer(question.id, "c");this.handleCorrect(e, question.multipleChoiceAnswer === "c")}} readOnly type="text" name="C" id="C" >{question.multipleChoiceC}</button>
                                                        </div>
                                                        <div className="col col-6">
                                                            <label htmlFor="A">Choice D</label>
                                                            <button style={{border: this.state.border}} onClick={(e) => {this.props.addAnswer(question.id, "d");this.handleCorrect(e, question.multipleChoiceAnswer === "d")}} readOnly type="text" name="D" id="D" >{question.multipleChoiceD}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else if (question.questionType === "trueFalse" && i === this.state.questionNumId) {

                                            return (
                                                <div key={i} className={classes.viewquizcardanswer}>
                                                    <div key={i} className="row">
                                                        <div style={{ width: "100%", margin: "20px" }} >{question.questionBody}</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col col-6">
                                                            <button style={{border: this.state.border}} onClick={(e) => {this.props.addAnswer(question.id, "true", question.multipleChoiceAnswer === "true");this.handleCorrect(e, question.multipleChoiceAnswer === "true")}} color="primary"> True </button>
                                                        </div>
                                                        <div className="col col-6">
                                                            <button style={{border: this.state.border}} onClick={(e) => {this.props.addAnswer(question.id, "false", question.multipleChoiceAnswer === "false");this.handleCorrect(e, question.multipleChoiceAnswer === "false")}} color="primary"> False </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        }
                                        return false
                                    }

                                    )
                                    : null
                                }




                            </div>

                            <div className="col col-12">
                            </div>

                        </div>
                    </div>

                </div>

            </>
        )

    }
}




export const ViewQuizcardQuestionModule = connect(null, null)(PureViewQuizcardQuestionModule)
