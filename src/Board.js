import React, { Component } from 'react'
import Field from './Field'
import './Board.scss'

class Board extends Component {
    static defaultProps = {
        quantity: 3,
        fieldWidth: 25,
    }
    constructor(props) {
        super(props)
        this.CreateFields = this.CreateFields.bind(this);
        this.onClick = this.onClick.bind(this);
        this.changeFieldAndBoard = this.changeFieldAndBoard.bind(this);
        this.state = { board: this.CreateFields() }
        this.didchange = true;
    }

    CreateFields() {
        let BoardCreator = []
        for (let x = 0; x < this.props.quantity; x++) {
            BoardCreator.push([]);
            for (let y = 0; y < this.props.quantity; y++) {
                BoardCreator[x].push(<Field className="Field" id={("r" + x + "c" + y).toString()} style={{
                    top: x * this.props.fieldWidth,
                    left: y * this.props.fieldWidth,
                    width: (this.props.fieldWidth).toString() + 'px',
                    height: (this.props.fieldWidth).toString() + 'px',
                    background: '#57DDF6'
                }}
                    onclick={this.onClick} />)
            }
        }
        return BoardCreator;
    }

    changeFieldAndBoard(color_one, color_two, x, y) {
        let newBoard = [];
        for (let a = 0; a < this.props.quantity; a++) {
            if (a !== x - 1 && a !== x + 1 && a !== x) {
                newBoard.push(this.state.board[a]);
            }
            else {
                newBoard.push([])
                for (let b = 0; b < this.props.quantity; b++) {
                    if ((b === y - 1 && a === x) || (b === y + 1 && a === x) || (b === y && a === x - 1) || (b === y && a === x + 1) || (a === x && b === y)) {
                        let background = '';
                        let boxShadow = ''

                        if (this.state.board[a][b].props.style.background !== color_one) {
                            background = color_one;
                        }
                        else {
                            background = color_two;
                            boxShadow = '0px 0px 8px rgb(248, 84, 84)'
                        }
                        let toedit = <Field className="Field" id={("r" + a + "c" + b).toString()} style={{
                            top: this.state.board[a][b].props.style.top,
                            left: this.state.board[a][b].props.style.left,
                            width: this.state.board[a][b].props.style.width,
                            height: this.state.board[a][b].props.style.height,
                            background: background,
                            boxShadow: boxShadow,

                        }}
                            onclick={this.onClick} />
                        newBoard[a].push(toedit);
                    }
                    else {
                        newBoard[a].push(this.state.board[a][b]);
                    }
                }
            }
        }
        this.setState({ board: newBoard })
    }

    onClick(ev) {
        this.props.onClick();
        let x = (ev.target.id).replace('r', "").replace('c', "");
        x = parseInt(x[0]);
        let y = (ev.target.id).replace('r', "").replace('c', "");
        y = parseInt(y[1]);
        console.log(x + '   ' + y);
        this.changeFieldAndBoard('#57DDF6', '#F57A62', x, y);
    }

    render() {
        if (!(this.props.quantity == this.state.board.length)) {
            if (!this.didchange) {
                this.setState({ board: this.CreateFields() })
                this.didchange = true;
            }
            this.didchange = false;
        }
        return (<div className="Board" style={{
            width: this.props.quantity * this.props.fieldWidth,
            height: this.props.quantity * this.props.fieldWidth
        }}>{this.state.board}</div>)
    }
}

export default Board;