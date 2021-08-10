import React from 'react'
import Icon from '@material-ui/core/Icon'

const HeadBar = () => {
    return (
        <div id="trello-header">
            <div id="left-side">
                <button className="trello-button"><Icon>apps</Icon></button>
                <button className="trello-button"><Icon>home</Icon></button>
                <button className="trello-bigbutton"><Icon>dashboard</Icon>   Boards</button>
                <div id="top-in"><input  type="text"></input>
                <button className="trello-button"><Icon>search</Icon></button></div>
            </div>
            <h3 id="trello-title">Trello</h3>
            <div id="right-side">
                <button className="trello-button"><Icon>add</Icon></button>
                <button className="trello-button"><Icon>info</Icon></button>
                <button className="trello-button trello-last"><Icon>notifications</Icon></button>
            </div>
        </div>
    )
}

export default HeadBar
