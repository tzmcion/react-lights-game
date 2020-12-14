import React, { Component, useState } from 'react'
import Name from './Name'
import Board from './Board'
import Data from './Data'
import './Levels.scss'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = { clicks: 0, level: "Pro", levelclass: "one", quantity: 4 }
        this.Clickcount = this.Clickcount.bind(this);
        this.onClick3x3 = this.onClick3x3.bind(this);
        this.onClick5x5 = this.onClick5x5.bind(this);
        this.onClick10x10 = this.onClick10x10.bind(this);
    }

    Clickcount() {
        this.setState({ clicks: this.state.clicks + 1 });
        switch (this.state.clicks) {
            case 5:
                this.setState({ level: 'Amazing', levelclass: 'two' });
                break;
            case 10:
                this.setState({ level: 'Golden_Boy', levelclass: 'three' });
                break;
            case 50:
                this.setState({ level: 'Not Bad !', levelclass: 'four' });
                break;
            case 100:
                this.setState({ level: 'Amateur', levelclass: 'five' });
                break;
            case 200:
                this.setState({ level: 'Senhor Blunder', levelclass: 'six' });
                break;
            default:
                break;
        }
    }

    onClick3x3() {
        this.setState({ quantity: 3, clicks: 0, level: "Pro", levelclass: 'one' })
    }

    onClick5x5() {
        this.setState({ quantity: 5, clicks: 0, level: "Pro", levelclass: 'one' })
    }

    onClick10x10() {
        this.setState({ quantity: 10, clicks: 0, level: "Pro", levelclass: 'one' })
    }

    render() {
        return (<div>
            <Name text1="Lights" text2="Out" text3="Minigame" />
            <Board quantity={this.state.quantity} fieldWidth='60' onClick={this.Clickcount} />
            <div className="Game-Buttons">
                <button className="Game-Button" onClick={this.onClick3x3}>3x3</button>
                <button className="Game-Button" onClick={this.onClick5x5}>5x5</button>
                <button className="Game-Button" onClick={this.onClick10x10}>10x10</button>
            </div>
            <Data text="Your Clicks: " data={this.state.clicks} />
            <Data text={this.state.level} classN={this.state.levelclass + " Level"} />
        </div>)
    }
}

export default Game;