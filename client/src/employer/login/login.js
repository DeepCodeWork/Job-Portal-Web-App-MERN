import React from 'react';
import Layout from '../../layout/Layout';
import LoginForm from './loginForm/loginForm';

const Login = () => {
    return(
            <Layout title="Employer signup">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="bg-light">
                            <LoginForm/>
                        </div>
                    </div>
    
                </div>
            </Layout>
    )
}

export default Login;