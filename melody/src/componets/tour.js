import React from 'react'
import Paula from '../images/pexels-pixabay-302831.jpg'
import John from '../images/pexels-brett-sayles-2599538.jpg'
import Peter from '../images/pexels-flo-dnd-1928739.jpg'
import Tour from './tour.css'

function tour() {
    return (
        <div id='date'>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-primary" id='ticket'>TOUR DATES </h1>
                        <i id='book'>Remember to book your ticket!!</i>
                    </div>
                </div>
            </section>
            <section>
                <div class="d-flex flex-column mb-3" id='tour'>
                    <div class="p-2" id='my-tour'>September<span>Sold out</span></div>
                    <hr></hr>
                    <div class="p-2" id='my-tour'>October<span>Sold out</span></div>
                    <hr></hr>
                    <div class="p-2" id='my-tour'>November</div>
                </div>
            </section>
            <div class="album py-5 bg-body-tertiary" id='mybody'>
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={Paula} className="img-fluid" alt="..." id='imag' />
                                <div class="card-body">
                                    <h3 className='pt-4'><b>USA</b></h3>
                                    <p>Mon 26 Jan 2009</p>
                                    <p class="card-text"><b>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</b></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary bg-black">Buy Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={John} className="img-fluid" alt="..." id='imag' />
                                <div class="card-body">
                                    <h3 className='pt-4'><b>Paris</b></h3>
                                    <p>Sat 28 Dec 2007</p>
                                    <p class="card-text"><b>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</b></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary bg-black">Buy Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={Peter} className="img-fluid" alt="..." id='imag' />
                                <div class="card-body">
                                    <h3 className='pt-4'><b>New York</b></h3>
                                    <p>Fri 27 Nov 2016</p>
                                    <p class="card-text"><b>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</b></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary bg-black">Buy Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tour