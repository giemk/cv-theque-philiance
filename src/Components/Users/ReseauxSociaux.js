import React from "react";
import FacebookBtn from '../Users/FacebookBtn';
import GithubBtn from '../Users/GithubBtn';
import GoogleBtn from '../Users/GoogleBtn';
import TwitterBtn from "../Users/TwitterBtn";

const ReseauSociauxPage = () => {
  return (
    <div className="sociauxbt">

    <div className="google">
        <GoogleBtn />
      </div>
       
      <div className="twitter">
      <TwitterBtn />
      </div>
      
      <div className="facebbok">
      <FacebookBtn />
      </div>
      
      <div className="github">
      <GithubBtn />   
      </div>
     
      </div>

    
  );
};
export default ReseauSociauxPage;
