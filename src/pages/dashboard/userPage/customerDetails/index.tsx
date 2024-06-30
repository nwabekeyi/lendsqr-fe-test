import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CustomerInfo from './customerInfo'; // Import the CustomerInfo component
import './customerDetails.scss';
import { CgArrowLongLeft } from 'react-icons/cg';
import { Button } from '../../../../components';

interface UserData {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
    educationLevel: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: number;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: number;
    starTier: number;
    userPicture: string;
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    bankDetails?: {
        bankName: string;
        accountNumber: number;
    };
    guarantor?: {
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        relationship: string;
    };
}

interface CustomerDetailsProps {
    user: UserData;
    onClose: () => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ user, onClose }) => {

    const renderStars = (stars: number) => {
        return (
            <div className="stars">
                {[...Array(3)].map((_, index) => (
                    <span key={index} className={`star ${index < stars ? 'filled' : ''}`}>★</span>
                ))}
            </div>
        );
    };

    if (!user) return null; // Guard clause to handle undefined user

    return (
        <div className="customer-details">
            <div className="modal-content">
                <div className='action-section'>
                <div className="back">
                    <p id="back-arrows" onClick={onClose}><CgArrowLongLeft size={20} className="arrow" /> Back to Users</p>
                </div>
                <div className="user-details-container">
                    <h2 className='user-details'>User Details</h2>
                    <div className="user-details-buttons">
                        <Button buttonText="BLACKLIST USER" userDetailsRed />
                        <Button buttonText="ACTIVATE USER" userDetails />
                    </div>
                </div>
                </div>
                <div className="user-details ">
                    {/* Header section with navigation */}
                    <div className="profile-section container">
                        <div className="profile-left">
                            <img src={user.userPicture} alt={`${user.fullName}'s profile`} className="user-picture" />


                            <div className="user-info">
                                <p className='customer-name'>{user.fullName}</p>
                                <p className='customer-id'>{user.bvn}</p>
                            </div>
                            <div className='divider' style={{ borderLeft: 'solid green 1px', padding: "20px", height: '100%', width: '5px'}}></div>

                            <div className="profile-center">
                            <p>User's tier</p>
                            <span className="stars-container">{renderStars(user.starTier)}</span>
                        </div>

                        <div className='divider' style={{ borderLeft: 'solid green 1px', padding: "20px", height: '100%', width: '5px'}}></div>

                        <div className="bank-details">
                            <p className='income'>{user.monthlyIncome}</p>
                            {user.bankDetails && (
                                <div>
                                    <span>{user.bankDetails.bankName} / {user.bankDetails.accountNumber}</span>
                                </div>
                            )}
                        </div>

                        </div>
                        
                        <div className="header-buttons">
                            <Link to="general-details" className="header-link">General Details</Link>
                            <Link to="" className="header-link">Documents</Link>
                            <Link to="" className="header-link">Bank Details</Link>
                            <Link to="" className="header-link">Loans</Link>
                            <Link to="" className="header-link">Savings</Link>
                            <Link to="" className="header-link">App and System</Link>
                        </div>
                    </div>
                    {/* Main content area */}
                    <div className="content-section">
                        <Routes>
                            {/* <Route path="/" element={<CustomerInfo user={user} />} /> */}
                            <Route path="/general-details" element={<CustomerInfo user={user} />} />

                            {/* Add routes for other sections */}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
