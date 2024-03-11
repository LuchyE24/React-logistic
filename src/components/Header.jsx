import React from 'react'
import Logo from '../assets/logo image.png'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={Logo} alt='Logo' srcSet=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavNavAltMarkup">
      <div className="navbar-nav mx-auto">
          <a className="nav-link active text-danger" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/Tracking">Tracking</a>
          <a className="nav-link" href="/contact">Contact</a>
          </div>
          <div className="navbar"></div>
          <a href="/contact" className="btn btn-danger text-light">Request a quote</a>
          </div>
  </div>
</nav>
    </>
  )
}

export default Header