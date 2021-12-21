import { Component } from "react";
import {baseUrl} from '../config';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const axios = require('axios');

export default class CandidatComponent extends Component {
    handleOnclick(e, val) {
        e.preventDefault();
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: 'Apakah kamu yakin?',
            text: "Kamu hanya dapat memilih satu kali",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Pilih',
            cancelButtonText: "Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    candidate_id: val,
                }
                const token = localStorage.getItem('token');
                let headers = {
                        Authorization: 'Bearer ' + token,
                        Accept: 'application/json'
                    }
                axios.post('vote', data, {
                    headers: headers
                })
                .then(res => {
                    if (res.data.status == "success") {
                        MySwal.fire({
                            title: "Berhasil!",
                            text: "Terima kasih sudah melakukan voting",
                            icon: "success"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                localStorage.removeItem('token')
                                window.location.href = "/"
                            }
                        })
                    } else if (res.data.status == "fail") {
                        MySwal.fire({
                            title: "Ditolak!",
                            text: res.data.message,
                            icon: "warning"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                localStorage.removeItem('token')
                                window.location.href = "/"
                            }
                        })
                    }
                    // console.log(res)
                }).catch(res => {
                    MySwal.fire({
                        title: "Ditolak!",
                        text: "Kamu sudah melakukan voting",
                        timer: 2000,
                        icon: "error",
                        showConfirmButton: false,
                        didOpen: () => {
                            MySwal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            localStorage.removeItem('token')
                            window.location.href = "/"
                        }
                    })
                })
            }
        })
    }
    render() {
        return (
            <div className="col-md-6 mt-4">
                <div className="card shadow-sm p-2">
                    <div className="card-header bg-white">
                        <h6 className="card-title">Kandidat {this.props.nomor}</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="mt-2">Ketua</h6>
                                <img src={`${baseUrl}/storages/candidates/`+this.props.foto_ketua} className="rounded float-left img-fluid" alt="" />
                                <p className="mt-5">{this.props.ketua}</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="mt-2">Wakil Ketua</h6>
                                <img src={`${baseUrl}/storages/candidates/`+this.props.foto_wakil} className="rounded float-left img-fluid" alt="" />
                                <p className="mt-5">{this.props.wakil}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Visi</h5>
                                <p dangerouslySetInnerHTML={{__html: this.props.visi}}></p>
                                {/* {this.props.visi} */}
                                <h5>Misi</h5>
                                <p dangerouslySetInnerHTML={{__html: this.props.misi}}></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white">
                        <div className="btn btn-danger btn-block p-2 shadow-sm" onClick={e => this.handleOnclick(e, this.props.id)}>Pilih</div>
                    </div>
                </div>
            </div>
        )
    }
}