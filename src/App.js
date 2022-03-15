import './App.css';
import Header from './components/header';
import Directory from './components/directory';
import CentralPanel from './components/central-panel';
import RightBar from './components/right-bar';
import { useState } from 'react';

function App() {

  const [tree, setTree] = useState();
  const [selectedNode, setSelectedNode] = useState({});

  return (
    <div className="App">
      <div className='header-container'>
        <Header />
      </div>
      <div className='content'>
        <Directory jsonVal={tree} setSelectedNode={setSelectedNode} />
        <CentralPanel tree={tree} setTree={setTree} />
        <RightBar selectedNode={selectedNode} />
      </div>
    </div>
  );
}

export default App;
