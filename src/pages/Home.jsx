import { data } from 'jquery';
import React, { Component, useEffect, useState } from 'react';
import CandidatComponent from '../components/Candidat';
import Lottie from 'react-lottie';
import * as animationData from '../lf30_editor_7eam6baw.json';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
const axios = require('axios');
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        if (!token) {
            this.props.history.push('/');
        }

        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const token = localStorage.getItem('token');
            let config = {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json'
                }
            }
            axios.get('candidate', config)
                .then(res => {
                    this.setState({data: res.data.data.candidates})
                    this.setState({loading: false})
                })
        }, 2000)
    }

    render() {
        return (
            <div>
                {this.state.loading ? 
                    (<Lottie options={defaultOptions}
                        height={200}
                        width={200}
                        style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginTop:'370px'}}/>)
                        :
                        (
                        <div>
                            <Navbar />
                            <div className="container">
                                <div className="alert alert-warning mt-5 p-4" role="alert">
                                    <strong>Perhatian!</strong> Pemilihan kandidat hanya dapat di lakukan satu kali dan hanya dapat dilakukan pada saat waktu yang telah ditentukan.
                                </div>
                                <div className="row">
                                    {
                                        this.state.data.map((candidate, i) => {
                                            return <CandidatComponent key={i} nomor={i+1} ketua={candidate.ketua} wakil={candidate.wakil} id={candidate.id} foto_ketua={candidate.foto_ketua} foto_wakil={candidate.foto_wakil} visi={candidate.visi} misi={candidate.misi} />
                                        })
                                    }
                                </div>
                            </div>
                        <Footer />
                    </div>
                    )
                }
            </div>
        )
    }
}

