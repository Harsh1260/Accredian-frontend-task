import React from 'react';
import Main from './Frontend/Main';
import ReferralFlow from './Frontend/ReferralFlowDiagram';
import Table from './Frontend/Table'
import FAQ from './Frontend/FAQ'
import FooterSection from './Frontend/SectionFooter';

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Main/>
        <ReferralFlow/>
        <Table/>
        <FAQ/>
        <FooterSection/>
      </div>
    </>
  )
}

export default App
