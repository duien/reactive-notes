import React, { Component } from 'react';
import classnames from 'classnames'

export default class Icon extends Component {
    render () {
        return <i className={classnames(this.props.className, 'fa', `fa-${ this.props.name }`)} />
    }
}
