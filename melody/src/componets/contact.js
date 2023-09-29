import React from 'react'
import Contact from './contact.css'

function contact() {
  return (
    <div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-primary">CONTACT</h1>
            <i>Fan? Drop a note!</i>
          </div>
        </div>
        <div class='row' id='contactbody'>
          <div class='col-lg-6'>
            <p><i class="bi bi-geo-alt"></i> <str>Chicago,USA</str></p>
            <p><i class="bi bi-telephone"></i> Phone: +123489777</p>
            <p><i class="bi bi-envelope-fill"></i> Email: mall@gmail.com</p>
          </div>
          <div class='col-lg-6'>
            <input type='text' placeholder='Name' id='name' required></input>
            <input type='text' placeholder='Email' id='name' required></input>
            <br />
            <br />
            <div class='col-lg-12'>
              <input type='text' placeholder='Message' id='message' required></input>
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary bg-black" id='send'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact