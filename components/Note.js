import React, {Component } from 'react'
import { NoteSeparator } from '../components'
import loremIpsum from 'lorem-ipsum'

export default class Note extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        // timestampStart: React.PropTypes.string.isRequired,
        timestampEnd: React.PropTypes.string.isRequired,
        tags: React.PropTypes.arrayOf(React.PropTypes.string)
    }

    render () {
        let tags = this.props.tags
        if (!tags.length) {
            let numTags = Math.floor(Math.random() * 3)
            for (let i=0; i<numTags; i++) {
                tags.push(loremIpsum({count: 1, units: 'words'}))
            }
        }

        return (
                <div className="note">
                { this.renderTitle() }
                { this.renderBody() }
                <NoteSeparator timestamp={this.props.timestampEnd} tags={this.props.tags} />
                </div>
        )
    }

    renderTitle () {
        if (this.props.title) return <h1>{ this.props.title}</h1>
    }

    renderBody() {
        let paragraphs = Math.floor((Math.random() * 5) + 1)
        let result = []

        for (let i=0; i < paragraphs; i++) {
            let sentences = Math.floor((Math.random() * 4) + 2)
            result.push( <p>{ loremIpsum({count: sentences}) }</p> )
        }

        return result
    }
}
