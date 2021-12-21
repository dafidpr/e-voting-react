import { data } from 'jquery';
import React, { Component, useEffect, useState } from 'react';
import CandidatComponent from '../components/Candidat';
import Lottie from 'react-lottie';
// import * as animationData from './pinjump.json'
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
const axios = require('axios');

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

        // const [data, setData] = useState([])
        
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
                    // console.log(res.data.data.candidates)
                })
        }, 2000)
    }

    render() {
        // const [loading, setLoading] = useState(undefined)
        return (
            <div>
                {this.state.loading ? 
                    (<Lottie options={defaultOptions}
                    height={200}
                    width={200}
                    style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex'}}/>)
                    :
                    (
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
                    </div>)
                }
                <Navbar />
                <Footer />
            </div>

        )
        // const loader = document.querySelector('#loader');
        // console.log(loader)
    }
}

