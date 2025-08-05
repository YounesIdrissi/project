import { useState, useEffect } from 'react'

import JobFlowOne from './components/JobPost/JobPostFlowOne';
import JobFlowTwo from './components/JobPost/JobPostFlowTwo';
import JobFlowThree from './components/JobPost/JobPostFlowThree';
import JobFlowFour from './components/JobPost/JobPostFlowFour';
import JobFlowFive from './components/JobPost/JobPostFlowFive';
import JobFlowSix from './components/JobPost/JobPostFlowSix';
import JobFlowSeven from './components/JobPost/JobPostFlowSeven';
import JobFlowEight from './components/JobPost/JobPostFlowEight';

import CsignUpOne from './components/ContractorSignUp/FlowOne';
import CsignUpTwo from './components/ContractorSignUp/FlowTwo';
import CsignUpThree from './components/ContractorSignUp/FlowThree';
import CsignUpFour from './components/ContractorSignUp/FlowFour';

import HsignUpOne from './components/HomeClientSignUp/FlowOne';
import HsignUpTwo from './components/HomeClientSignUp/FlowTwo';

import Identify from './components/IdentifyUserType/IdentifyUser';

import UserLogin from './components/Login/UniversalLogin';

import HDefaultDash from './components/HomeClientDashboard/HDefaultDash';
import ApplicationsExist from './components/HomeClientDashboard/ApplicationsExist';
import ViewApplicants from './components/HomeClientDashboard/ViewApplicants';

import CDefaultDash from './components/ContractorDashboard/CDefaultDash';
import CSettings from './components/ContractorDashboard/CSettings';

/* {condition ? <div>True</div> : <div>False</div>} */

function App() {
  return (
    <>
    <JobFlowOne /> {}
    <JobFlowTwo /> {}
    <JobFlowThree /> {}
    <JobFlowFour /> {}
    <JobFlowFive /> {}
    <JobFlowSix /> {}
    <JobFlowSeven /> {}
    <JobFlowEight /> {}

    <CsignUpOne /> {}
    <CsignUpTwo /> {}
    <CsignUpThree /> {}
    <CsignUpFour /> {}

    <HsignUpOne /> {}
    <HsignUpTwo /> {}

    <Identify /> {}

    <UserLogin /> {}

    <HDefaultDash /> {}
    <ApplicationsExist /> {}
    <ViewApplicants /> {}

    <CDefaultDash /> {}
    <CSettings /> {}




    </>
  )
}

export default App
