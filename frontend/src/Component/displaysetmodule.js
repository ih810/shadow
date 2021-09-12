import React from 'react';
import { connect } from 'react-redux'


class PureDisplaySetModule extends React.Component {

    render() {
        console.log("HIHI",this.props);
        return (
            <>
                {this.props.sets.map((set, i) => {
                    return (
                        <div key={i} className="col m-1 p-5 border border-4 rounded-lg highlight ">
                            <h4><strong>{set.title}</strong></h4>
                            <p>{set.description}</p>
                        </div>
                    )
                })}
            </>
        )

    }
}


export const DisplaySetModule = connect(null, null)(PureDisplaySetModule)