import React from 'react'
import TweetBox from "./TweetBox";
import Post from "./Post"
import "./Feed.css"


function Feed() {
    return (
        <div className="feed">
            {/**HEADER */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
               
            {/**TWEET BOX */}
            <TweetBox/>

            {/**posts */}
            <Post   avatar="https://avatars0.githubusercontent.com/u/47585614?s=460&u=2a6aa55f9167878fa6b4e0cbbad502c63aa574a2&v=4" username="josueArreola7" displayName="Josue Arreola" text="I challenge you to create a Twitter clone with ReacT!" image="https://media.giphy.com/media/IbrrNckkEAHNmVaNs3/giphy.gif"/>
            <Post avatar="https://1z73q13h5gz932pdsz42u00q-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/elon-musk.jpg" username="elonmusj" displayName="Melon Musk" text="Let's go, front-end done!!"/>
            <Post avatar="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/07/27/15011705202172.jpg" username="jeffAmazon" displayName="Jeff Bezos" text="HELLO WORLD"/>
            <Post  avatar="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo" username="cleverprogrammer" displayName="Cleverqazi" text="I've no idea what I'm doing"/>
            <Post  avatar="https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg" username="sssonysangha" displayName="Sonny" text="This is really handy"/>

            

        </div>
    )
}

export default Feed
