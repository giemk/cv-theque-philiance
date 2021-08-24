import React from 'react';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {};
const FacebookBtn=()=>{
return( 
<FacebookLogin
  className="facebook border border-primary rounded-pill"
  appId="517619699333646"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>Facebook</button>
  )}
/>
 )
}
export default FacebookBtn;




















