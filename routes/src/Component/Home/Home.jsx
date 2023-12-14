import React from 'react'
import './Home.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Home() {
    return (
        <>
            <header class="home">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-6 valign">
                            <div>
                                <h6 class="sub-title">
                                    <span class="icon-img">
                                        <i><LocalShippingIcon /></i>
                                    </span>
                                    <span class="text">Easy way to order your food</span>
                                </h6>
                                <h1 class="fw-800">Healthy & fresh food in one place</h1>
                                <p class="fz-20">come and see the best burguers in town bring<br />
                                    your friends and family.</p>

                                <div class="mt-30">
                                    <div href="#" class="butn paddi">
                                        <div class="flex">
                                            <span>Order now</span>
                                            <span class="valign">
                                                <div class="text-center">
                                                    <i class="icon fa-solid fa-arrow-right inline"></i>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <a href="#" class="butn-under">
                                        <span class="main-color">See our menu</span>
                                        <span class="underline"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="img">
                                <img src="./image/burger.png" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home