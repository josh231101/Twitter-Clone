import React from 'react';
import "./TweetBox.css";
import { Avatar , Button } from "@material-ui/core"; 

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                        <Avatar src="https://avatars0.githubusercontent.com/u/47585614?s=460&u=2a6aa55f9167878fa6b4e0cbbad502c63aa574a2&v=4"/>
                        <input placeholder="What's happening?" type="text"/>
                        
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image Url"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
