import axios from "axios";
import React, {useState, useEffect, Component} from 'react';
import Ilustration from '../assets/img/signin.svg';
import ClipLoader from "react-spinners/ClipLoader";
import Lottie from 'react-lottie';
import * as animationData from '../lf30_editor_7eam6baw.json';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
export default class Auth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            message: null,
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({loading: true});
        const data = {
            nim: this.nim,
            password: this.password
        }
        axios.post('auth/signin', data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token);
                this.props.history.push("/voting");
            }, this.setState({ error: false, message: null }))
            .catch(err => {
                this.setState({ error: true, message: err.response.data.message })
            }).finally(() => {
                this.setState({loading: false});
            });
    }
    setError() {
        if (this.state.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    <strong>Error!</strong> {this.state.message}
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    render() {
        return (
            <div>
                  {this.state.loading ? (
                    <Lottie options={defaultOptions}
                    height={200}
                    width={200}
                    style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginTop:'370px'}}/>
                    ) : (
                    <div className="container mb-5 mt-5">
                        <div className="row">
                            <div className="mx-auto mt-5">
                                <img src="img/logo.png" width="150" alt="" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-7">
                                <img src={Ilustration} style={{width: '100%' }} className="px-4 img-hidden" width="500" alt="" />
                            </div>
                            <div className="col-md-5">
                                {this.setError()}
                                <div className="card p-3 border-0 shadow-sm b-radius-10">
                                    <div className="card-body">
                                        <h4>Masuk</h4>
                                        <p className="text-muted">Masuk untuk melakukan voting</p>
                                        <form onSubmit={this.handleSubmit} className="mt-4">
                                            <div className="form-group">
                                                <label htmlFor="">NIM</label>
                                                <input type="text" placeholder="Masukan NIM Anda" className="form-control" onChange={e => this.nim = e.target.value} required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">Password</label>
                                                <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} required />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-danger btn-block p-2">Masuk</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    )}
            </div>
            
        )
    }
}