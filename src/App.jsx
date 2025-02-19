import React from 'react';
import Main from './Frontend/Main';
import ReferralFlow from './Frontend/ReferralFlowDiagram';
import Table from './Frontend/Table'
import FAQ from './Frontend/FAQ'
import Footer from './Frontend/footer';

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Main/>
        <ReferralFlow/>
        <Table/>
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default App
