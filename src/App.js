import React from 'react';
import { ListOfcategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfcategories />
      <ListOfPhotoCards />
    </>
  );
};

export default App;