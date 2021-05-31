import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});


const Header = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem button onClick={() => window.location.href = "/emailverification"} >
                <ListItemText primary={'Email Verification'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/"} >
                <ListItemText primary={'Email Sending'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/"} >
                <ListItemText primary={'Email Templates'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/"} >
                <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/pricing"} >
                <ListItemText primary={'Pricing'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/contact"} >
                <ListItemText primary={'Contact Us'} />
            </ListItem>
            <ListItem button onClick={() => window.location.href = "/signin"} >
                <ListItemText primary={'Go to Console'} />
            </ListItem>
          </List>
        </div>
    );


    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div style={{ maxWidth: '1900px' }} class="container-lg">
                <a class="navbar-brand d-lg-none" href="/">Marketing Platform</a>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <button class="navbar-toggler" type="button" onClick={toggleDrawer(anchor, true)} >
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
                

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
