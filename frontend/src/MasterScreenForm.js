import React from 'react'
import LeftNavbar from './LeftNavbar'
import Header from './Header'
import EmployeeType from './Forms/EmployeeType/EmployeeType'
import { Route, Routes } from 'react-router-dom'
import CompanyType from './Forms/CompanyType/CompanyType'
import BusinessNature from './Forms/BusinessNature/BusinessNature'
import IndustryType from './Forms/IndustryType/IndustryType'
import CollateralType from './Forms/CollateralType/CollateralType'
import DocumentType from './Forms/DocumentType/DocumentType'
import Bank from './Forms/Bank/Bank'
import DataConsent from './Forms/DataConsent/DataConsent'
import EmployeeUpdate from './Forms/EmployeeType/EmployeeUpdate'
import CompanyTypeUpdate from './Forms/CompanyType/CompanyTypeUpdate'
import BusinessNatureUpdate from './Forms/BusinessNature/BusinessNatureUpdate'
import IndustryTypeUpdate from './Forms/IndustryType/IndustryTypeUpdate'
import CollateralTypeUpdate from './Forms/CollateralType/CollateralTypeUpdate'
import DocumentTypeUpdate from './Forms/DocumentType/DocumentTypeUpdate'
import BankUpdate from './Forms/Bank/BankUpdate'
import DataConsentUpdate from './Forms/DataConsent/DataConsentUpdate'
import RelationTypeUpdate from './Forms/Relation/RelationTypeUpdate'
import RelationType from './Forms/Relation/RelationType'

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
                            <Route path="/employee-type/update/:emptypeid" element={<EmployeeUpdate />} />
                            <Route path="/company-type" element={<CompanyType />} />
                            <Route path="/company-type/update/:ctypeid" element={<CompanyTypeUpdate />} />
                            <Route path="/business-nature" element={<BusinessNature />} />
                            <Route path="/business-nature/update/:bnid" element={<BusinessNatureUpdate />} />
                            <Route path="/industry-type" element={<IndustryType />} />
                            <Route path="/industry-type/update/:itid" element={<IndustryTypeUpdate />} />
                            <Route path="/collateral-type" element={<CollateralType />} />
                            <Route path="/collateral-type/update/:ctid" element={<CollateralTypeUpdate />} />
                            <Route path="/document-type" element={<DocumentType />} />
                            <Route path="/document-type/update/:docid" element={<DocumentTypeUpdate />} />
                            <Route path="/bank" element={<Bank />} />
                            <Route path="/bank/update/:bid" element={<BankUpdate />} />
                            <Route path="/relation-type" element={<RelationType />} />
                            <Route path="/relation-type/update/:relid" element={<RelationTypeUpdate />} />
                            <Route path="/data-consent" element={<DataConsent />} />
                            <Route path="/data-consent/update/:tdatacid" element={<DataConsentUpdate />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
