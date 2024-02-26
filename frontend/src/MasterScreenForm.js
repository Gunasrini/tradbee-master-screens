import React from 'react'
import LeftNavbar from './LeftNavbar'
import Header from './Header'
import EmployeeType from './Forms/EmployeeType'
import { Route, Routes } from 'react-router-dom'
import CompanyType from './Forms/CompanyType'
import BusinessNature from './Forms/BusinessNature'
import IndustryType from './Forms/IndustryType'
import CollateralType from './Forms/CollateralType'
import DocumentType from './Forms/DocumentType'
import Bank from './Forms/Bank'
import DataConsent from './Forms/DataConsent'

export default function MasterScreenForm() {
    return (
        <>
            <div className='container-fluid p-0'>
                <Header />
                <LeftNavbar />
                <div className='right-content'>
                    <div className='inner-wrapper'>
                        <Routes>
                            <Route path='/' element={<EmployeeType />} />
                            <Route path="/company-type" element={<CompanyType />} />
                            <Route path="/business-nature" element={<BusinessNature />} />
                            <Route path="/industry-type" element={<IndustryType />} />
                            <Route path="/collateral-type" element={<CollateralType />} />
                            <Route path="/document-type" element={<DocumentType />} />
                            <Route path="/bank" element={<Bank />} />
                            <Route path="/data-consent" element={<DataConsent />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
