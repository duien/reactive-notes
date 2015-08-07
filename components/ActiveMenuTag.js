import React, { Component } from 'react';
import Icon from './Icon'

export default class ActiveMenuTag extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.showDefaultAction = this.showDefaultAction.bind(this)
        this.showActionMenu = this.showActionMenu.bind(this)
    }
    render () {
        var style = {
            backgroundColor: this.props.background,
            color: this.props.foreground
        }

        return (
            <span className='tag active-menu' style={style} onMouseEnter={this.showDefaultAction(true)} onMouseLeave={this.showDefaultAction(false)}>
                { this.props.tag }
                <span className='menu' onMouseEnter={this.showActionMenu(true)} onMouseLeave={this.showActionMenu(false)}>
                    <Icon name='circle-o' className='menu-trigger'/>
                    { this.renderDefaultAction() }
                    { this.renderActionMenu() }
                </span>
            </span>
        )
    }

    showDefaultAction (show) {
        return () => {
            this.setState({showDefaultAction: show})
        }
    }

    showActionMenu (show) {
        return () => {
            this.setState({showActionMenu: show})
        }
    }

    renderDefaultAction() {
        if (!this.state.showDefaultAction || this.state.showActionMenu) return
        return (
            <span className='action default-action down'>
                <Icon name='arrow-down' />
            </span>
        )
    }

    renderActionMenu() {
        if (!this.state.showActionMenu) return
        return (
                <span className='action-menu'>
                    <span className='action up'>
                        <Icon name='arrow-up' />
                    </span>
                    <span className='action default-action down'>
                        <Icon name='arrow-down' />
                    </span>
                    <span className='action right'>
                        <Icon name='minus' />
                    </span>
                </span>
        )
    }
}
