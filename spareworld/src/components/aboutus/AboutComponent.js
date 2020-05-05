import React from 'react'
import image1 from './img/img001.jpg'
import image2 from './img/img11.jpg'
import image3 from './img/img12.jpg'
import image4 from './img/img10.jpg'
import image5 from './img/img5.jpg'
import image6 from './img/img7.jpg'
import image7 from './img/img8.jpg'
class AboutComponent extends React.Component {
    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="col-sm-12">
                            <img src={image1} alt="This is about us image" class="img img-responsive" width="100%" height="600px" />
                        </div>
                    </div>
                </div>
                <div class="alert alert-success">
                    <h2 class="text-center">Our Team</h2>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div>
                            <img src={image2} alt="this is an image" class="img img-responsive" width="100%" />
                            <div class="card-body">
                                <h4 class="card-title">Sita Dahal</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Teacher</h6>
                                <p class="card-text">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://www.gmail.com">ramshyam@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div>
                            <img src={image3} alt="" class="img img-responsive" width="100%" />
                            <div class="card-body">
                                <h4 class="card-title">Bibya Paudel</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Managing Director</h6>
                                <p class="card-text">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://www.gmail.com">weguruchela@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div>
                            <img src={image4} alt="" class="img img-responsive" width="100%" />
                            <div class="card-body">
                                <h4 class="card-title">SIta  Bhattarai</h4>
                                <h6 class="card-subtitle mb-2 text-muted">CEO</h6>
                                <p class="card-text">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps</p>
                            </div>
                            <div class="card-footer">
                                <a href="https://www.gmail.com">bhattarai.utk1@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 align="Center">Our Customers</h2>
                <div class="row">
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image4} width="100%" alt="Customers" />
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image2} width="100%" alt="Customers" />
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image3} width="100%" alt="Customers" />
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image5} width="100%" alt="Customers" />
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image6} width="100%" alt="Customers" />
                    </div>
                    <div class="col-lg-2 col-sm-4 mb-4">
                        <img class="img img-responsive" src={image7} width="100%" alt="Customers" />
                    </div>
                </div>
            </div >




        )
    }
}

export default AboutComponent