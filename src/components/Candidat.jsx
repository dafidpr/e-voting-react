import { Component } from "react";

export default class CandidatComponent extends Component {
    render() {
        return (
            <div className="col-md-6 mt-4">
                <div className="card shadow-sm p-2">
                    <div className="card-header bg-white">
                        <h6 className="card-title">Kandidat 1</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="mt-2">Ketua</h6>
                                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="rounded float-left img-fluid" alt="" />
                                <p className="mt-5">David Mahbubi</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="mt-2">Wakil Ketua</h6>
                                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="rounded float-left img-fluid" alt="" />
                                <p className="mt-5">Yusup Supriyanto</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Visi</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, expedita alias quas accusantium possimus magnam cumque nobis temporibus ex unde?</p>
                                <h5>Misi</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white">
                        <div className="btn btn-danger btn-block p-2 shadow-sm">Pilih</div>
                    </div>
                </div>
            </div>
        )
    }
}