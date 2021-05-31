import React from 'react';
import { API_SERVICE } from '../config/URI';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Header from '../components/Header';
import Footer from '../components/Footer';

const EmailVerification = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setemail('');
        setOpen(false);
    };
    const [email, setemail] = React.useState('');
    const [btntextvalid, setbtntextvalid] = React.useState('Valid');
    const [result, setresult] = React.useState(false);

    

    const validate = () => {
        setbtntextvalid("Validating...");
        axios.get(`${API_SERVICE}/api/v1/main/checkemail2/${email}`)
            .then((response) => {
                setresult(response.data.valid);
                setbtntextvalid("Valid");
                handleClickOpen();
            }).catch(err => console.log(err));
    }

    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">Result</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {
                    result ? (
                        <center>
                            <img alt="Image" src="https://img.icons8.com/color/96/000000/approval--v1.png"/>
                            <br />
                            <br />
                            <h2 style={{ color: '#000000', fontFamily: 'sans-serif' }}>
                                {email} is <br /> Valid Email
                            </h2>
                        </center>
                    ) : (
                        <center>
                            <img alt="Image" src="https://img.icons8.com/color/96/000000/cancel.png"/>
                            <br />
                            <br />
                            <h2 style={{ color: '#000000', fontFamily: 'sans-serif' }}>
                                {email} is <br /> Not Valid Email
                            </h2>
                        </center>
                    )
                }
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
        <Header />
        <section class="pt-6 pt-md-11 bg-dark">
        <div class="container-lg">
            <div class="row justify-content-center" data-aos="fade-up">
            <div class="col-12 text-center text-white">

                <h6 class="text-uppercase text-warning mb-5">
                More data. Less work.
                </h6>

                <h1 class="display-3 mb-4">
                Email Verification
                </h1>

            </div>
            </div>
            <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div class="col-md-8 col-lg-6 text-center text-white">
                <p class="font-size-lg">
                Create rich dashboards from your company's data without having to create emails or setup tracking.
                </p>

                <form>
                <div class="input-group rounded-top-left rounded-bottom-right shadow">

                    <input disabled={btntextvalid === "Validating..." ? true : false} value={email} onChange={(e) => setemail(e.target.value)} type="email" class="form-control bg-white" placeholder="Email address" aria-label="Email address" aria-describedby="subscriptionButton" />

                    <div class="input-group-append">
                    <button disabled={btntextvalid === "Validating..." ? true : false} onClick={validate} class="btn btn-white" type="button" id="subscriptionButton">
                        {btntextvalid}
                    </button>
                    </div>

                </div>
                </form>

            </div>
            </div>
        </div>
        </section>

        <div class="position-relative">
        <div class="shape shape-fluid-x shape-bottom text-dark pb-17 pb-lg-18">
            <div class="shape-img pb-8 pb-md-11">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v25H75L25 50H0z" fill="currentColor"/></svg>
            </div>
        </div>
        </div>

        <section style={{ marginTop: '420px' }} class="pt-10 pt-md-12 pb-11 pb-md-13">
        <div class="container-lg">
            <div class="row align-items-center justify-content-between">
            <div class="col-md-5 col-lg-6 order-md-1">

                <div class="position-relative mb-10 mb-md-0">

                <div class="position-absolute bottom-left text-primary-light ml-n8 mb-n8">
                    <svg width="185" height="186" viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="currentColor"/><circle cx="22" cy="2" r="2" fill="currentColor"/><circle cx="42" cy="2" r="2" fill="currentColor"/><circle cx="62" cy="2" r="2" fill="currentColor"/><circle cx="82" cy="2" r="2" fill="currentColor"/><circle cx="102" cy="2" r="2" fill="currentColor"/><circle cx="122" cy="2" r="2" fill="currentColor"/><circle cx="142" cy="2" r="2" fill="currentColor"/><circle cx="162" cy="2" r="2" fill="currentColor"/><circle cx="182" cy="2" r="2" fill="currentColor"/><circle cx="2" cy="22" r="2" fill="currentColor"/><circle cx="22" cy="22" r="2" fill="currentColor"/><circle cx="42" cy="22" r="2" fill="currentColor"/><circle cx="62" cy="22" r="2" fill="currentColor"/><circle cx="82" cy="22" r="2" fill="currentColor"/><circle cx="102" cy="22" r="2" fill="currentColor"/><circle cx="122" cy="22" r="2" fill="currentColor"/><circle cx="142" cy="22" r="2" fill="currentColor"/><circle cx="162" cy="22" r="2" fill="currentColor"/><circle cx="182" cy="22" r="2" fill="currentColor"/><circle cx="2" cy="42" r="2" fill="currentColor"/><circle cx="22" cy="42" r="2" fill="currentColor"/><circle cx="42" cy="42" r="2" fill="currentColor"/><circle cx="62" cy="42" r="2" fill="currentColor"/><circle cx="82" cy="42" r="2" fill="currentColor"/><circle cx="102" cy="42" r="2" fill="currentColor"/><circle cx="122" cy="42" r="2" fill="currentColor"/><circle cx="142" cy="42" r="2" fill="currentColor"/><circle cx="162" cy="42" r="2" fill="currentColor"/><circle cx="182" cy="42" r="2" fill="currentColor"/><circle cx="2" cy="62" r="2" fill="currentColor"/><circle cx="22" cy="62" r="2" fill="currentColor"/><circle cx="42" cy="62" r="2" fill="currentColor"/><circle cx="62" cy="62" r="2" fill="currentColor"/><circle cx="82" cy="62" r="2" fill="currentColor"/><circle cx="102" cy="62" r="2" fill="currentColor"/><circle cx="122" cy="62" r="2" fill="currentColor"/><circle cx="142" cy="62" r="2" fill="currentColor"/><circle cx="162" cy="62" r="2" fill="currentColor"/><circle cx="182" cy="62" r="2" fill="currentColor"/><circle cx="2" cy="82" r="2" fill="currentColor"/><circle cx="22" cy="82" r="2" fill="currentColor"/><circle cx="42" cy="82" r="2" fill="currentColor"/><circle cx="62" cy="82" r="2" fill="currentColor"/><circle cx="82" cy="82" r="2" fill="currentColor"/><circle cx="102" cy="82" r="2" fill="currentColor"/><circle cx="122" cy="82" r="2" fill="currentColor"/><circle cx="142" cy="82" r="2" fill="currentColor"/><circle cx="162" cy="82" r="2" fill="currentColor"/><circle cx="182" cy="82" r="2" fill="currentColor"/><circle cx="2" cy="102" r="2" fill="currentColor"/><circle cx="22" cy="102" r="2" fill="currentColor"/><circle cx="42" cy="102" r="2" fill="currentColor"/><circle cx="62" cy="102" r="2" fill="currentColor"/><circle cx="82" cy="102" r="2" fill="currentColor"/><circle cx="102" cy="102" r="2" fill="currentColor"/><circle cx="122" cy="102" r="2" fill="currentColor"/><circle cx="142" cy="102" r="2" fill="currentColor"/><circle cx="162" cy="102" r="2" fill="currentColor"/><circle cx="182" cy="102" r="2" fill="currentColor"/><circle cx="2" cy="122" r="2" fill="currentColor"/><circle cx="22" cy="122" r="2" fill="currentColor"/><circle cx="42" cy="122" r="2" fill="currentColor"/><circle cx="62" cy="122" r="2" fill="currentColor"/><circle cx="82" cy="122" r="2" fill="currentColor"/><circle cx="102" cy="122" r="2" fill="currentColor"/><circle cx="122" cy="122" r="2" fill="currentColor"/><circle cx="142" cy="122" r="2" fill="currentColor"/><circle cx="162" cy="122" r="2" fill="currentColor"/><circle cx="182" cy="122" r="2" fill="currentColor"/><circle cx="2" cy="142" r="2" fill="currentColor"/><circle cx="22" cy="142" r="2" fill="currentColor"/><circle cx="42" cy="142" r="2" fill="currentColor"/><circle cx="62" cy="142" r="2" fill="currentColor"/><circle cx="82" cy="142" r="2" fill="currentColor"/><circle cx="102" cy="142" r="2" fill="currentColor"/><circle cx="122" cy="142" r="2" fill="currentColor"/><circle cx="142" cy="142" r="2" fill="currentColor"/><circle cx="162" cy="142" r="2" fill="currentColor"/><circle cx="182" cy="142" r="2" fill="currentColor"/><circle cx="2" cy="162" r="2" fill="currentColor"/><circle cx="22" cy="162" r="2" fill="currentColor"/><circle cx="42" cy="162" r="2" fill="currentColor"/><circle cx="62" cy="162" r="2" fill="currentColor"/><circle cx="82" cy="162" r="2" fill="currentColor"/><circle cx="102" cy="162" r="2" fill="currentColor"/><circle cx="122" cy="162" r="2" fill="currentColor"/><circle cx="142" cy="162" r="2" fill="currentColor"/><circle cx="162" cy="162" r="2" fill="currentColor"/><circle cx="182" cy="162" r="2" fill="currentColor"/><circle cx="2" cy="182" r="2" fill="currentColor"/><circle cx="22" cy="182" r="2" fill="currentColor"/><circle cx="42" cy="182" r="2" fill="currentColor"/><circle cx="62" cy="182" r="2" fill="currentColor"/><circle cx="82" cy="182" r="2" fill="currentColor"/><circle cx="102" cy="182" r="2" fill="currentColor"/><circle cx="122" cy="182" r="2" fill="currentColor"/><circle cx="142" cy="182" r="2" fill="currentColor"/><circle cx="162" cy="182" r="2" fill="currentColor"/><circle cx="182" cy="182" r="2" fill="currentColor"/></svg>
                </div>

                <div class="rounded-top-left rounded-bottom-right shadow-img">
                    <img class="position-relative img-fluid rounded-top-left rounded-bottom-right shadow-lg" src="assets/img/screenshots/desktop/screenshot-1.jpg" alt="..." />
                </div>

                </div>


            </div>
            <div class="col-md-6 col-lg-5 order-md-0">

                <h2 class="display-4 mb-4">
                Measure to decide, not just to measure.
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                </p>
                <ul class="list-checked list-checked-primary">
                <li>
                    Machine learning enabled projections
                </li>
                <li>
                    Visitor mouse and click tracking
                </li>
                <li>
                    Automated revenue suggestions
                </li>
                </ul>
                <a class="btn btn-primary lift" href="#!">
                View all
                </a>

            </div>
            </div>
        </div>
        </section>


        <section class="pt-9 pt-md-11 mb-5 bg-white">
        <div class="container-lg">
            <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8 text-center">

                <h6 class="text-uppercase text-primary mb-5">
                Management fund
                </h6>

                <h2 class="display-4 mb-9">
                Follow your users from initial visit through <span class="text-underline-warning">loyal evangelist</span>.
                </h2>

            </div>
            </div>
            <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-12">
                <ol class="timeline timeline-expand-lg timeline-warning mb-0">
                <li class="timeline-item active">

                    <h2>
                    Activation
                    </h2>
                    <p class="text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                    </p>

                    <a class="h4 font-family-sans-serif" href="#!">
                    Activation Triggers <i class="fe fe-chevron-right ml-1"></i>
                    </a>

                </li>
                <li class="timeline-item active">
                    <h2>
                    Engagement
                    </h2>

                    <p class="text-muted mb-4">
                    In urna lectus, mattis non accumsan in, tempor dictum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a class="h4 font-family-sans-serif" href="#!">
                    Feedback Loops <i class="fe fe-chevron-right ml-1"></i>
                    </a>

                </li>
                <li class="timeline-item active">
                    <h2>
                    Retention
                    </h2>
                    <p class="text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                    </p>

                    <a class="h4 font-family-sans-serif" href="#!">
                    Churn Minifiers <i class="fe fe-chevron-right ml-1"></i>
                    </a>

                </li>
                </ol>

            </div>
            </div>
        </div>
        </section>
        <Footer />
        </>
    )
}

export default EmailVerification
