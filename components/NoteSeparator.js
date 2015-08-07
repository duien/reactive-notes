import React, { Component} from 'react'
import ActiveMenuTag from './ActiveMenuTag'
import Icon from './Icon'
import moment from 'moment'

export default class NoteSeparator extends Component {
    render () {
        return (
            <div className="separator">
                { this.renderTags() }
                <hr />
                <span className="timestamp">{ this.formatTimestamp() }</span>
            </div>
        )
    }

    renderTags () {
        var colors = ['#8dd3c7',
                      '#bebada',
                      '#fb8072',
                      '#80b1d3',
                      '#fdb462',
                      '#b3de69',
                      '#fccde5',
                      '#d9d9d9',
                      '#bc80bd',
                      '#ccebc5',
                      '#ffed6f']
        return (
                <div className="tags">
                {this.props.tags.map( (tag, i) =>
                        <ActiveMenuTag tag={tag} background={colors[i]} foreground='white' />
                    )}
                <span className="tag add-tag" style={{backgroundColor: '#ddd', color: 'white'}}><Icon name='plus' /></span> 
                </div>
        )
    }

    formatTimestamp (timestamp) {
        timestamp = timestamp || this.props.timestamp
        if ( !timestamp) return

        timestamp = moment(timestamp)
        if ( timestamp.isBefore(moment() - moment.duration(7, 'days')) )
            return timestamp.format('dddd, MMM Mo [at] h:mma')
        return timestamp.calendar()
    }
}
