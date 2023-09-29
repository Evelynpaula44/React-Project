import React from 'react'
import Feature from './feature.css'
import Eva from '../images/pexels-dõmantas-èskis-1583391.jpg'

function feature() {
    return (
        <div>
            <main>

                <div class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">THE BAND </h1>
                            <i>We love music</i>
                            <p class="" id='soul'>Music is the soul of life and gives immense peace to us. In the words of William Shakespeare, “If music is the food of love, play on, Give me excess of it; that surfeiting, The appetite may sicken, and so die.” Thus, Music helps us in connecting with our souls or real self.Music stimulates the brain which in turn helps with pain relief, reducing stress and memory. A study from Harvard has shown that relaxing music may lower blood pressure and heart rate after physical exertion.</p>
                        </div>
                    </div>
                </div>

                <div class="album py-5 bg-body-tertiary">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text">Name</p>
                                        <img src={Eva} className="img-fluid" alt="..." id='eve'/>                     
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text">Name</p>
                                        <img src={Eva} className="img-fluid" alt="..." id='eve'/>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <p class="card-text">Name</p>
                                        <img src={Eva} className="img-fluid" alt="..." id='eve'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default feature