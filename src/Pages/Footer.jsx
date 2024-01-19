import React from 'react'

function Footer() {
  return (
    <footer class="footer-main">
    <div class="block--lg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-logo">
              <a href="#">GDPC COIN</a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, neque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptas, laboriosam?
            </p>
          </div>
          <div class="col-md-4">
            <h4>Links</h4>
            <ul class="navbar-nav">

              <li class="nav-item">
                <a href="#"> Login</a>
              </li>
              <li class="nav-item">
                <a href="#"> Buy now</a>
              </li>
              <li class="nav-item">
                <a href="#"> Schedule meeting</a>
              </li>
              <li class="nav-item">
                <a href="#"> Disclaimers</a>
              </li>
              <li class="nav-item">
                <a href="#"> Privacy policy</a>
              </li>
              <li class="nav-item">
                <a href="#"> Legal</a>
              </li>

            </ul>
          </div>
          <div class="col-md-4">
            <div class="socialmedia">
              <h4>
                Our Socials
              </h4>
              <ul class="social-nav">
                <li class="nav-item">

                  <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-youtube"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-meetup"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-reddit-alien"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="copyright mt-5">
          © Copyright 2022 GDPC, Global LLC
        </p>
      </div>

    </div>

  </footer>
  )
}

export default Footer