import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { history, destroyAll, destroyById } from './api';
import apiUrl from '../apiConfig';
import './History.css'

class HistoryList extends Component {
    state = {
        historyLst: []
    }
    componentDidMount() {
        history(this.props.user).then((respData) => {
            let history = respData.data.history
            this.setState({ historyLst: history })
        })
    }
    del = (historyId) => {
        destroyById(this.props.user, historyId)
            .then((d) => {
                let newHistory = this.state.historyLst.filter((h) => h._id != historyId)
                this.setState({ historyLst: newHistory })
            })
            .then(() => alert('deleted'))
            .catch((e) => console.log(e))
    }

    delAll = () => {
        destroyAll(this.props.user)
            .then((d) => {
                this.setState({ historyLst: [] })
            })
            .then(() => alert('History deleted'))
            .catch((e) => console.log(e))
    }

    render() {
        if (this.state.historyLst.length == 0)
            return (<div className="noHistory">No history</div>)
        return (
            <div id='hist-container'>
                <button className='del-btn' onClick={() => this.delAll()}> Delete All History </button>
                <br/><br/>
                <center>
                <table>
                    <thead>
                        <th>Text</th>
                        <th>Score</th>
                        <th>Code</th>
                        <th>Date</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.state.historyLst.map((item, index) => (
                            <tr key={index}>
                                <td>{item.text}</td>
                                <td>{item.score}</td>
                                <td>{item.code}</td>
                                <td>{item.createdAt}</td>
                                <td> <button className='del-btn' onClick={() => this.del(item._id)}>Delete </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </center>
            </div>
        )
    }
}

class History extends Component {


    render() {

        return (
            <div>
                <h3>History</h3>

                <br />
                <HistoryList user={this.props.user} />
            </div>
        )
    }

}

export default History;