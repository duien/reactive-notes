import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import moment from 'moment'
import loremIpsum from 'lorem-ipsum'
import * as cp from '../components'

export default class NotesApp extends Component {
    render () {
        console.log('trying to render notesapp')
        console.log('cp', cp)
        // var tagMenu = {
        //     actions: {
        //         followBackward
        //     }
        // }

        let notes = []
        let beginTime = moment() - moment.duration(2, 'months')
        let timestamp = moment(beginTime)

        console.log('beginTime', beginTime, timestamp)

        while (timestamp.isBefore(moment())) {
            let noteProps = {
                timestampEnd: timestamp.toJSON(),
                tags: []
            }

            let hasTitle = (Math.floor(Math.random() * 5) % 3) === 0
            let titleLength = Math.floor((Math.random() * 3) + 3)
            if (hasTitle) noteProps.title = loremIpsum({count: titleLength, units: 'words'})
            notes.push(<cp.Note {...noteProps} />)

            // we want a # of seconds between 12 and 56 hours
            let offset = Math.floor((Math.random() * 48 * 60 * 60) + (12 * 60 * 60) +1)
            timestamp = moment(timestamp + moment.duration(offset, 'seconds'))
        }

        console.log(notes.length)

        return (
                <div>
                <div className="note-scroll">
                { notes }
                </div>
                </div>
        )
        //         <h1>Reactive Notes UI Playground</h1>
        //         <p>This is a pretend note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //         <cp.NoteSeparator timestamp="2015-07-17T10:03:53.028Z" tags={['corgi', 'kitten']} />
        //         <p>This is a pretend note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //         <cp.NoteSeparator timestamp="2015-08-03T22:26:07.757Z" tags={['lorem']} />

        //         <p>This is a pretend note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //         <cp.NoteSeparator tags={['lemon drop']} />

        //         </div>
        //         <cp.ActiveMenuTag tag='another' background='#821D53' foreground='white' />
        //         </div>
        // )
    }
}

    // <ActiveMenuTag tag='another' color='blue'>
    // <ActiveMenuItem position='top' icon='arrow-up' name='Follow Backward' />
    // <ActiveMenuItem position='right' icon='remove' name='Remove' />
    // <ActiveMenuItem position='top' icon='arrow-down' name='Follow Forward' />
    // </ActiveMenuTag>



