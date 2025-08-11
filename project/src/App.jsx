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
import HNoApplicants from './components/HomeClientDashboard/HNoApplicants';
import HApplicantsExist from './components/HomeClientDashboard/HApplicantsExist';
import HApplicationsPage from './components/HomeClientDashboard/HApplicationsPage';
import HJobConfirmed from './components/HomeClientDashboard/HJobConfirmed';
import HJobComplete from './components/HomeClientDashboard/HJobComplete';
import HaccountSettings from './components/HomeClientDashboard/HaccountSettings';

import CDefaultDash from './components/ContractorDashboard/CDefaultDash';
import CSettings from './components/ContractorDashboard/CSettings';

import UniversalLanding from './components/LandingPage/UniversalLanding';

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
    <HNoApplicants /> {}
    <HApplicantsExist /> {}
    <HApplicationsPage /> {}
    <HJobConfirmed /> {}
    <HJobComplete /> {}
    <HaccountSettings /> {}

    <CDefaultDash /> {}
    <CSettings /> {}

    <UniversalLanding /> {}


    </>
  )
}

export default App
