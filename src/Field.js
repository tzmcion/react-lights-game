import React, { Component } from 'react'

class Field extends Component {
    static defaultProps = {
        className: 'Field',
        id: '',
        style: {},
        onclick: function () { console.log('clicked') }
    }

    render() {
        return (<div onClick={this.props.onclick} id={this.props.id} className={this.props.className} style={this.props.style}></div>)
    }
}

export default Field;