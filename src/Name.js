import React, { Component } from 'react'
import './Name.scss'

class Name extends Component {
    static defaultProps = {
        text1: 'Lights',
        text2: 'Out'
    }

    render() {
        return (<div className="Name">
            <span className="Name-1">{this.props.text1 + ' '}</span>
            {this.props.text2 ? <span className="Name-2">{this.props.text2 + ' '}</span> : null}
            {this.props.text3 ? <span className="Name-3">{this.props.text3 + ' '}</span> : null}
        </div>)
    }
}

export default Name;