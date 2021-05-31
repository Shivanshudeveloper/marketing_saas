import React from 'react'

const Signin = () => {
    return (
        <>
        <main class="border-multicolor">
        <div class="container-lg d-flex flex-column">
            <div class="row align-items-center justify-content-center no-gutters min-vh-100 mt-n1">
            <div class="col-md-7 col-lg-5 py-10 py-md-12 text-center">
                <h1 class="display-4 mb-4">
                Sign In
                </h1>

                <p class="text-muted">
                Don’t have an account? <a href="/signup">Sign up</a>
                </p>

                <form class="mb-6">
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
                    Sign in
                </button>

                </form>
                <a class="font-size-sm" href="password-reset-cover.html">
                Forgot your password?
                </a>

            </div>
            <div class="col-lg-6 offset-lg-1 align-self-stretch d-none d-lg-block">
                <div class="h-100 vw-50 bg-cover border-top border-top-4 border-transparent" style={{ backgroundImage: 'url(assets/img/authentication/cover-1.png)', backgroundClip: 'content-box' }}></div>

            </div>
            </div>
        </div>
        </main>
        </>
    )
}

export default Signin
