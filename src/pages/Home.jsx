import React, { Component } from 'react';
import CandidatComponent from '../components/Candidat';
const axios = require('axios');

export default class HomeComponent extends Component {

    render() {
        return (
            <div className="container">
                <div class="alert alert-warning mt-5 p-4" role="alert">
                    <strong>Perhatian!</strong> Pemilihan kandidat hanya dapat di lakukan satu kali dan hanya dapat dilakukan pada saat waktu yang telah ditentukan.
                </div>
                <div className="row">
                    <CandidatComponent />
                    <CandidatComponent />
                </div>
            </div>

        )
    }
}

