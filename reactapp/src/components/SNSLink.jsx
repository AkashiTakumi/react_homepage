import React from "react";
import linkedIn_Logo from '../images/LinkedIn_icon.png';
import twitter_icon from '../images/Twitter_icon.png';
import instagram_icon from '../images/instagram.png';

const SNSLink = () => {
    const style = {
        margin: 10
    }
    return (
        <>
        <h2>[各種SNS]</h2>
        <span className="mge-20" style={style}>
            <a href="https://www.linkedin.com/in/takumi-akashi-88a41521b/"><img src={linkedIn_Logo} alt="LinkedInリンク" width={60} height={60}/></a>
        </span>
        <span className="mge-20" style={style}>
            <a href="https://twitter.com/takumi_3025"><img src={twitter_icon} alt="twitterアイコン" width={60} height={60}/></a>
        </span>
        <span className="mge-20" style={style}>
            <a href="https://www.instagram.com/takkun_kutta/"><img src={instagram_icon} alt="instagramアイコン" width={60} height={60}/></a>
        </span>
        </>
    );
}

export default SNSLink;