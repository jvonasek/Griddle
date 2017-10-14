import React from 'react';

import Header from '../../containers/Header';
import Grid from '../../containers/Grid';
import Footer from '../../containers/Footer';
import DialogRoot from '../../containers/DialogRoot';

import './styles.css';

const App = () => (
  <div className="GameContainer">
    <Header />
    <Grid />
    <Footer />
    <DialogRoot />
    {/*<Dialog title={'Good job!'} text={`You needed ${0} clicks.`} />*/}
  </div>
);

export default App;

