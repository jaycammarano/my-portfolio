import React from 'react';
import ProfileIcon from './ProfileIcon';

interface ITweet {
  username: string;
  displayName: string;
  content: string | JSX.Element;
  profilePic: string;
  image?: string;
  imageLabel?: string;
  video?: string;
  videoLabel?: string;
}

const Tweet: React.FC<ITweet> = ({
  profilePic,
  username,
  displayName,
  content,
}) => {
  let useName = displayName;
  if (displayName.length > 16) {
    useName = displayName.slice(0, 13) + '...';
  }
  return (
    <div className="p-6 border-t-2 border-green-500">
      <div className="flex flex-row">
        <ProfileIcon
          size="m"
          className="w-16 h-16 roundIcon"
          src={profilePic}
          label={`${username} - ${displayName}`}
        />
        <div>
          <div className="flex flex-row m-2 text-lg tooltip">
            <div className="font-bold">
              {useName}
              <span className="font-light tooltiptext">{displayName}</span>
            </div>
            <div>
              <p className="font-light ml-2 text-base text-gray-500">
                {username} · May 26
              </p>
            </div>
          </div>
          <div className="font-light m-2">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
export type { ITweet };
