import React, { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user, googleAuthenticate } from '../actions/auth';
import queryString from 'query-string'

const Layout = (props) => {
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state)
        console.log('Code: ' + code)

        if (state != null && code != null) {
            props.googleAuthenticate(state, code);
        }
        else{
            console.log('asdadas++++')
            props.checkAuthenticated();
            props.load_user();
        }
    }, [location]);

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user, googleAuthenticate })(Layout);