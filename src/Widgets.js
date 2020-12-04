import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1199186147131449345"} />
        <TwitterTweetEmbed tweetId={"1306112908653293568"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="10Prasad25"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.linkedin.com/in/prasad-patil-087a561b1/"}
          options={{ text: "#reactjs is awesome", via: "10Prasad25" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
