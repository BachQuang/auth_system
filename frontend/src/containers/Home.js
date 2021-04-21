import React from 'react';
import  {Link} from 'react-router-dom';
const Home = () => (
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class="display-4">Welcome to Auth System</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p class="lead"></p>
            <hr class="my-4"/>
            <p>Click to Log In button</p>
            <Link class= 'btn btn-primary btn-lg' to='/login' role='button'>Log in</Link>
        </div>
    </div>
)

export default Home;
