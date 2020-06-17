import React from 'react';
import Split from './composition/Split';
import './App.css';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>

      <RouletteGun bulletInChamber={5} />

      {/* <Bomb /> */}

      {/* <Split className='left flexBasis='2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      <Split />
      <Split className='right'>
        Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split> */}
    </main>
  );
}

export default App;