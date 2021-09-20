import React from 'react';
import { connect } from 'react-redux'
// Require Action
import { getdataThunk } from '../Redux/actions/action'
import { addBridgeThunk } from '../Redux/actions/bridgeAction'
// Require Css
import classes from './displaycardmodule.module.css'

class PureDisplayCardModule extends React.Component {

    addFlashConnect(e){
        this.props.addBridge({
            type: "set_flashcard",
            setId: parseInt(this.props.match.params.id),
            flashcardId: e.target.attributes["data-key"].value
        })
    }
    addQuizConnect(e){
        this.props.addBridge({
            type: "set_quizcard",
            setId:  parseInt(this.props.match.params.id),
            quizcardId: e.target.attributes["data-key"].value
        })
    }
    addDictationcardConnect(e){
        this.props.addBridge({
            type: "set_dictationcard",
            setId:  parseInt(this.props.match.params.id),
            dictationcardId: e.target.attributes["data-key"].value
        })
    }
    render() {
        console.log("props in display card module",this.props)

        return (
            <>
                {this.props.allCard && this.props.allCard.flashcard.length > 0 ? this.props.allCard.flashcard.map((card, i) => {
                    return (
                        <div data-key={card.id} data-type="flashcard" className={classes.flashcard} onClick={(e)=>{ this.addFlashConnect(e); this.props.toggle(e) }}>
                            <h4 data-key={card.id} data-type="flashcard">{card.flashcardTitle} Add Exist Flashcard</h4>
                            <p data-key={card.id} data-type="flashcard">{card.flashcardBody}</p>
                        </div>
                    )
                }): 
                this.props.view && this.props.view.correctflashCard.length > 0 ? this.props.view.correctflashCard.map((card, i) => {
                    console.log("correct card map in display card moudle", card)
                    
                    return (
                        <div data-key={card.id} data-type="flashcard" className={classes.flashcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="flashcard">{card.flashcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                            <p data-key={card.id} data-type="flashcard">{card.flashcardBody}</p>
                        </div>
                    )
                })
                : this.props.dash === "dashSet" && this.props.cards.flashcard && this.props.cards.flashcard.length > 0 ? this.props.cards.flashcard.map((card)=>{
                    return (
                        <div data-key={card.id} data-type="flashcard" className={classes.flashcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="flashcard">{card.flashcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                            <p data-key={card.id} data-type="flashcard">{card.flashcardBody}</p>
                        </div>
                    )
                }) : null
                }

                {this.props.allCard && this.props.allCard.quizcard.length > 0 ? this.props.allCard.quizcard.map((card, i) => {
                    return (
                        <div data-key={card.id} data-type="quizcard" className={classes.quizcard} onClick={(e)=>{ this.addQuizConnect(e);this.props.toggle(e) }}>
                            <h4 data-key={card.id} data-type="quizcard">{card.quizcardTitle} Add Exist Quizcard</h4>
                            <p data-key={card.id} data-type="quizcard">{card.quizcardRecording}</p>
                        </div>
                    )
                }): 
                this.props.view && this.props.view.correctquizCard.length > 0 ? this.props.view.correctquizCard.map((card, i) => {
                    return (
                        <div data-key={card.id} data-type="quizcard" className={classes.quizcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="quizcard">{card.quizcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                        </div>
                    )
                })
                : this.props.dash === "dashSet" && this.props.cards.quizcard && this.props.cards.quizcard.length > 0 ? this.props.cards.quizcard.map((card)=>{
                    return (
                        <div data-key={card.id} data-type="quizcard" className={classes.quizcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="quizcard">{card.quizcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                            <p data-key={card.id} data-type="quizcard">{card.quizcardRecording}</p>
                        </div>
                    )
                }) : null
                }
                {this.props.allCard && this.props.allCard.dictationcard.length > 0 ? this.props.allCard.dictationcard.map((card, i) => {
                    return (
                        <div data-key={card.id} data-type="dictationcard" className={classes.dictationcard} onClick={(e)=>{ this.addDictationcardConnect(e);this.props.toggle(e) }}>
                            <h4 data-key={card.id} data-type="dictationcard">{card.dictationcardTitle} Add Exist Dictation Crd</h4>
                            <p data-key={card.id} data-type="dictationcard">{card.dictationBody}</p>
                        </div>
                    )
                }): 
                this.props.view && this.props.view.correctdictationCard.length > 0 ? this.props.view.correctdictationCard.map((card, i) => {
                    return (
                        <div data-key={card.id} data-type="dictationcard" className={classes.dictationcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="dictationcard">{card.dictationcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                            <p data-key={card.id} data-type="dictationcard">{card.dictationBody}</p>
                        </div>
                    )
                })
                : this.props.dash === "dashSet" && this.props.cards.dictationcard && this.props.cards.dictationcard.length > 0 ? this.props.cards.dictationcard.map((card)=>{
                    return (
                        <div data-key={card.id} data-type="dictationcard" className={classes.dictationcard} onClick={(e)=>{this.props.navigate(e)}}>
                            <h4 data-key={card.id} data-type="dictationcard">{card.dictationcardTitle} </h4>
                            <span className={classes.deletebtn}><i class="fas fa-times"></i></span>
                            <p data-key={card.id} data-type="dictationcard">{card.dictationBody}</p>
                        </div>
                    )
                }) : null
                }
            </>

        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addBridge: (bridge) => {
            dispatch(addBridgeThunk(bridge))
        },
        getdata: (email) => {
            dispatch(getdataThunk(email))
        }
    }
}

export const DisplayCardModule = connect(null, mapDispatchToProps)(PureDisplayCardModule)
