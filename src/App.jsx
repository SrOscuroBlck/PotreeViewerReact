import { useState } from 'react'
import PotreeViewer from './components/PotreeViewer'

function App() {
  return (
    <>
      <PotreeViewer pointCloudPath="/pointclouds/catedral/metadata.json" />
    </>
  );
}


export default App
