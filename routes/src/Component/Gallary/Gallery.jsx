import React from 'react'
import './Gallary.css';

function Gallery() {
  return (
    <section class="simp-gellary section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 padd">
            <div class="round-head mb-80 text-center">
              <h6 class="ls3 fz-12">Our Gallery <span></span></h6>
              <h2>Restaurant Gallery</h2>
            </div>
          </div>
        </div>


        <div class="row mb-80 md-mb50">
          <div class="col-4 padd md-mb50">
            <div class="iteme-img">
              <img src="image/gallary1.jpg" alt=''/>
            </div>
          </div>

          <div class="col-4 padd valign md-mb50">
            <div class="iteme-img">
              <img src="image/dish5.jpg" alt=''/>
            </div>
          </div>

          <div class="col-4 padd">
            <div class="iteme-img">
              <img src="image/gallary3.jpg" alt=''/>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-4 valign padd md-mb50">
            <div class="iteme-img">
              <img src="image/gallary4.jpg" alt="" />
            </div>
          </div>

          <div class="col-4 padd md-mb50">
            <div class="iteme-img">
              <img src="image/gallary5.jpg" alt="" />
            </div>
          </div>

          <div class="col-4 padd valign">
            <div class="iteme-img">
              <img src="image/gallary6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="top-left opacity-1">
        <img src="image/burgir.svg" alt="" />
      </div>

      <div class="bottom-left opacity-1">
        <img src="image/legpic.svg" alt="" />
      </div>
    </section>
  )
}

export default Gallery
