import React from 'react';

interface IProfileIcon {
  size: string;
  className: string;
  src: string;
  label: string;
}

const ProfileIcon: React.FC<IProfileIcon> = ({
  size = 'm',
  className,
  src,
  label,
}) => {
  return (
    <img
      src={src}
      alt={label}
      className={className ? className : `w-${size} h-${size}`}
    />
  );
};

export default ProfileIcon;
