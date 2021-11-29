import React from 'react';


// Component 
import { Banner } from './components/Banner/Banner';
import { Button, ButtonTypeSecondary } from './components/Button';
import { Title } from './components/Title';

// GLOBAL STYLES 
import './index.css';
import { UserProfile } from './components/Profile';
import { Heeader } from './components/HeaderContainer';
import Logo from './components/Logo';
import { Search } from './components/Search';


function App() {
  return <>
      <Heeader />
      <Logo />
      <UserProfile/>
      <Banner/>
      <Search />
      <Title />
    </>
}

export default App;
