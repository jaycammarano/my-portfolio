import React from 'react';
import Tweet from '../lib/Tweet';
import jensif from '../../assets/images/jensif.jpg';
import defPic from '../../assets/images/default.png';
const References: React.FC = () => {
  const firstTweet = (
    <p>
      I had the pleasure of meeting Jay Cammarano via the early days of
      turntable.fm. His insatiable taste for music is only the cherry on top of
      his engineering skills. He is driven, smart, and would be a great culture
      fit. I have seen tremendous growth in his development skills and a strong
      tenacity for taking ownership of projects and keeping up with the latest
      development languages.
    </p>
  );
  const secondTweet = (
    <p>
      Jay Cammarano and I have worked on two separate projects. He has proven to
      be a reliable and efficient coder. His willingness to learn is only
      surpassed by his ability to do so, and his drive to make himself better.
      Whenever we work together, I always feel that I understand any new
      material better due to his ability to explain his project sections, and
      his questions force me to explain my sections in a way that I probably
      would not have thought of on my own."
    </p>
  );
  const thirdTweet = (
    <p>
      It's been a pleasure to watch Jay Camamrano grow as a developer over the
      last year. I have no doubt we'll be building something cool together one
      day
    </p>
  );
  return (
    <div id="references" className="m-4 my-24 border-2 border-green-400">
      <h2 className="text-5xl my-4 text-center">References:</h2>
      <div>
        <Tweet
          username="@jensif"
          displayName="jen"
          content={firstTweet}
          profilePic={jensif}
        />
      </div>
      <div>
        <Tweet
          username="@Will_C_It"
          displayName="Will Campbell"
          content={secondTweet}
          profilePic={defPic}
        />
      </div>
      <div>
        <Tweet
          username="@rob"
          displayName="Rob McFadzean - North X South CTO"
          content={thirdTweet}
          profilePic={defPic}
        />
      </div>
    </div>
  );
};

export default References;
