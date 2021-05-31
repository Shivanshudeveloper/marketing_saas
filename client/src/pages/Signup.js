import React from 'react'

const Signup = () => {
    return (
        <>
        <main class="border-multicolor">
            <div class="container-lg d-flex flex-column">
                <div class="row align-items-center justify-content-center no-gutters min-vh-100 mt-n1">
                <div class="col-md-7 col-lg-5 py-10 py-md-12 text-center">

                    <h1 class="display-4 mb-4">
                    Sign Up
                    </h1>

                    <p class="text-muted">
                    Create beautiful marketing websites in hours instead of weeks.
                    </p>

                    <form class="mb-6">

                    <div class="form-group">
                        <label class="sr-only" for="authEmail">
                        Full Name
                        </label>
                        <input class="form-control" id="authEmail" type="text" placeholder="Full Name" />
                    </div>

                    <div class="form-group">
                        <label class="sr-only" for="authEmail">
                        Phone No.
                        </label>
                        <input class="form-control" id="authEmail" type="text" placeholder="Phone No." />
                    </div>

                    <div class="form-group">
                        <label class="sr-only" for="authEmail">
                        Company Name
                        </label>
                        <input class="form-control" id="authEmail" type="text" placeholder="Company Name" />
                    </div>

                    <div class="form-group">
                        <label class="sr-only" for="authEmail">
                        Your email
                        </label>
                        <input class="form-control" id="authEmail" type="email" placeholder="Your email" />
                    </div>

                    <div class="form-group">
                        <div class="input-group inpit-group-merge">
                        <input class="form-control" id="authPassword" placeholder="Your password" type="password" aria-label="Your password" aria-describedby="authPasswordCaption" />
                        <div class="input-group-append">
                            <a class="input-group-text text-decoration-none text-gray-500" id="authPasswordCaption" data-toggle="password" href="#authPassword">
                            <i class="fe fe-eye"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <button class="btn btn-block btn-primary">
                        Sign up
                    </button>

                    </form>

                    <small class="text-muted">
                    Already have an account? <a href="/signin">Login</a>
                    </small>

                </div>
                <div class="col-lg-6 offset-lg-1 align-self-stretch d-none d-lg-block">

                    <div class="h-100 vw-50 bg-cover border-top border-top-4 border-transparent" style={{ backgroundImage: 'url(assets/img/authentication/cover-2.png)', backgroundClip: 'content-box' }}></div>

                </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Signup
