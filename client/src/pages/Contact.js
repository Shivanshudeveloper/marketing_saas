import React from 'react';


import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <section class="pt-6 pt-md-6 pb-10 pb-md-12">
            <div class="container-lg">
                <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8 text-center">

                    <h6 class="text-uppercase text-primary mb-5">
                    Contact us
                    </h6>

                    <h1 class="display-3 mb-4">
                    How can we help you?
                    </h1>

                    <p class="font-size-lg text-muted mb-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                    </p>

                    <div class="row mb-9">
                    <div class="col-md py-md-4 mb-6 mb-md-0">

                        <a class="text-reset text-decoration-none" href="#!">

                        <div class="icon text-primary-light mb-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M14.486 18l-1.689 3.057a1 1 0 01-1.708.069L9.017 18H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3h-4.514z" fill="#335EEA" opacity=".3"/><path d="M6 7h9a1 1 0 010 2H6a1 1 0 110-2zm0 4h5a1 1 0 010 2H6a1 1 0 010-2z" fill="#335EEA" opacity=".3"/></g></svg>
                        </div>

                        <h6 class="text-uppercase mb-0">
                            Live chat
                        </h6>

                        <small class="text-muted">
                            Wait time of ~10 minutes
                        </small>

                        </a>

                    </div>
                    <div class="col-md py-md-4 mb-6 mb-md-0 border-left-md">

                        <a class="text-reset text-decoration-none" href="mailto:#!">

                        <div class="icon text-primary-light mb-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M6 2h12a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm1.5 3a.5.5 0 000 1h6a.5.5 0 100-1h-6zm0 2a.5.5 0 000 1h3a.5.5 0 100-1h-3z" fill="#335EEA" opacity=".3"/><path d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z" fill="#335EEA"/></g></svg>
                        </div>

                        <h6 class="text-uppercase mb-0">
                            Email us
                        </h6>

                        <small class="text-muted">
                            We reply in ~24 hours
                        </small>

                        </a>

                    </div>
                    <div class="col-md py-md-4 border-left-md">

                        <a class="text-reset text-decoration-none" href="tel:#!">

                        <div class="icon text-primary-light mb-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path d="M13.08 14.784l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.801.13l1.104 2.208a4.387 4.387 0 01-.822 5.065l-5.999 5.998a5.427 5.427 0 01-5.553 1.311l-2.415-.804a.5.5 0 01-.195-.828l2.65-2.652a2 2 0 012.31-.374l.25.125a2 2 0 002.308-.375z" fill="#335EEA"/><path d="M14.148 6.007l-.191 1.991a4.987 4.987 0 00-4.018 1.441 4.987 4.987 0 00-1.442 4.004l-1.992.185a6.986 6.986 0 012.02-5.603 6.987 6.987 0 015.623-2.018zm.35-3.985l-.185 1.992A8.978 8.978 0 007.111 6.61a8.978 8.978 0 00-2.598 7.191l-1.992.183a10.977 10.977 0 013.176-8.788 10.977 10.977 0 018.801-3.175z" fill="#335EEA" opacity=".3"/></g></svg>
                        </div>

                        <h6 class="text-uppercase mb-0">
                            Call
                        </h6>

                        <small class="text-muted">
                            7am - 9pm PST
                        </small>

                        </a>

                    </div>
                    </div>

                    <form>
                    <div class="row">
                        <div class="col-md-6">

                        <div class="form-group">
                            <label class="sr-only" for="contactName">
                            Your name
                            </label>
                            <input class="form-control" id="contactName" type="text" placeholder="Your name" />
                        </div>

                        </div>
                        <div class="col-md-6">

                        <div class="form-group">
                            <label class="sr-only" for="contactEmail">
                            Your email
                            </label>
                            <input class="form-control" id="contactEmail" type="email" placeholder="Your email" />
                        </div>

                        </div>
                        <div class="col-12">

                        <div class="form-group">
                            <label class="sr-only" for="contactMessage">
                            Your message
                            </label>
                            <textarea class="form-control" id="contactMessage" placeholder="Your message" rows="7"></textarea>
                        </div>

                        </div>
                    </div>
                    <button class="btn btn-block btn-primary">
                        Send a Message
                    </button>
                    </form>

                </div>
                </div>
            </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact
