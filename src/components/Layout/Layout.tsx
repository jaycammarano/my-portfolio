import React from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <LeftPanel />
      {children}
    </div>
  );
};

export default Layout;
