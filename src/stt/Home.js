import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { stt } from './api';
import apiUrl from '../apiConfig';
import './Home.css';
 
// arr = "cat".split("") // ["c", "a", "t"]
// loop thru arr
// deaf_language[letter] setTimeOut

class DImages extends Component{
    state = {
        counter: 0,
        currentImage: null,
   }

   t = () => {
       let images = this.props.images;
       this.interval = setInterval(() => {
        this.setState((pS) => {
            if(pS.counter >= images.length - 1){
                clearInterval(this.interval)
                return {counter: 0}
            }else{
                return {counter: pS.counter + 1, currentImage: images[pS.counter + 1]}
            }
        })
       }, 1000)
   }

   componentWillUnmount(){
       clearInterval(this.interval)
   }

   render(){
       if(this.state.currentImage != null){
       return (
           <div>
               <img className="hand" alt='' src={this.state.currentImage} width='150' height='150' />
           </div>
       )}else{
           return ''
       }
   }
} 

class STTHome extends Component {
    state = {
        msg: '',
        isLoading: false,
        resp: {
            text: '',
            analyze: {
                score: null,
                emotion: { img: null, code: null },
            },
            deaf_language_images: []
        }

    }
    handleFile = (event) => {
        // alert(0);
        this.setState({ isLoading: true })
        let file = event.target.files[0];
        var form = new FormData();
        form.append('audioFile', file);
        // console.log(form.get('audioFile'));
        console.log(this.props.user);
        stt(form, this.props.user)
            .then((resp) => {
                this.setState({ resp: resp.data, isLoading: false, msg: '' })
                this.refs.child.t()
            })
            .catch((e) => {
                console.log(e);
                this.setState({isLoading: false, msg: e.toString() })
            });

    }
    clickInput = () => {
        document.getElementById('input-audio').click()
    }
    render() {
        let resp = this.state.resp;
        let f, emotionUrl;
        if (!this.state.isLoading) {
            f = (
                <div class="body">
                    {/* <h3 className="upload">Upload Voice</h3> */}
                  <center>  <button className='upload-btn' onClick={() => this.clickInput()}>Upload Voice File</button> </center>
                    <input id='input-audio' className="btn" type='file' onChange={this.handleFile} />
                </div>
            )
        } else {
          
            f =   'Loading ...'
        }
        if (resp.analyze.emotion.img != null)
            emotionUrl = 'emotions/' + resp.analyze.emotion.img
        else
            emotionUrl = ''
        return (
            <div className="card-1">
                {f}
                <br />
                <h4>{this.state.msg}</h4>
                <h4 className="analyzedText">{resp.text}</h4>
                <h3 className="Score">{(resp.analyze.score) ? 'Score:' : ''} {resp.analyze.score} </h3>
                {/* <h5 className="score-number" >{resp.analyze.score}</h5> */}
                <h5 className="code">{resp.analyze.emotion.code}</h5>
                <h5><img className="emo" alt='' src={emotionUrl} width='150' /></h5>
                 <DImages images={resp.deaf_language_images} ref='child' />
             </div>
        )
    }
}



export default STTHome;