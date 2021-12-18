import React, { Component } from 'react';
import CandidatComponent from '../components/Candidat';
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
            data: []
        }
    }

    // componentDidMount() {
    //     let config = {
    //         headers: {
    //             Authorization: 'Bearer ' + token,
    //             Accept: 'application/json'
    //         }
    //     }
    //     axios.get('candidate', config)
    //         .then
    // }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="alert alert-warning mt-5 p-4" role="alert">
                        <strong>Perhatian!</strong> Pemilihan kandidat hanya dapat di lakukan satu kali dan hanya dapat dilakukan pada saat waktu yang telah ditentukan.
                    </div>
                    <div className="row">
                        <CandidatComponent />
                        <CandidatComponent />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

