import React from "react";

class Post extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>

                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-md-4">

                        </div>
                        <div className="col-8 col-md-4">
                            <div className="card mb-4"  key={this.props.data.id} >
                                <div className="row g-0">
                                    <div className=" col-md-4">
                                        <img src={'./img/' + this.props.data.foto} className="img-fluid" width="100%" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{this.props.data.nombres}</h5>
                                            <p id="superheroe"className="card-text text-center">{this.props.data.superheroe}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-2 col-md-4">

                        </div>

                    </div>

                </div>

            </>
        );
    }
}

export default Post;
