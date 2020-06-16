import React from 'react';
import Layout from '../../layout/Layout';
import SignupForm from './signupForm/signupForm';

const signup = () => {
    return(
        <Layout title="Employer signup">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="bg-light">
                    <SignupForm/> 
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default signup;