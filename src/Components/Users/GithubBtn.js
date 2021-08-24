import React from 'react';
import LoginGithub from 'react-login-github';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);
const GithubBtn=()=>{
    return( 
    <LoginGithub
    className="github border border-primary rounded-pill"
    clientId="Iv1.50ab24b69e54c045"
    onSuccess={onSuccess}
    onFailure={onFailure}
    />
     );
    };
    export default GithubBtn;
    