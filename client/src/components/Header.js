import React from 'react'

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div style={{ maxWidth: '1900px' }} class="container-lg">
                <a class="navbar-brand d-lg-none" href="index.html">Marketing Platform</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-end w-100">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/emailverification" role="button" aria-haspopup="true" aria-expanded="false">
                            Email Verification
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#!" role="button" aria-haspopup="true" aria-expanded="false">
                            Email Sending
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#!" role="button" aria-haspopup="true" aria-expanded="false">
                            Email Templates
                        </a>
                    </li>
                </ul>
                <a class="navbar-brand d-none d-lg-block px-lg-6" href="/">Email Marketing Platform</a>
                <ul class="navbar-nav justify-content-start w-100">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/about" role="button" aria-haspopup="true" aria-expanded="false">
                            About
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/pricing" role="button" aria-haspopup="true" aria-expanded="false">
                            Pricing
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="/contact" role="button" aria-haspopup="true" aria-expanded="false">
                        Contact Us
                    </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/signin" role="button" aria-haspopup="true" aria-expanded="false">
                            Go to Console
                        </a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header
