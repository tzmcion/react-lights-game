import React, { Component } from 'react'
import './Data.scss'

class Data extends Component {
    static defaultProps = {
        text: '',
        data: '',
        classN: 'Data'
    }
    render() {
        return (<div className={this.props.classN}>
            <h3>{this.props.text} {this.props.data}</h3>
        </div>)
    }
}

export default Data;