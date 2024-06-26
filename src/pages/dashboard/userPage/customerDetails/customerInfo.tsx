import React from 'react';

interface CustomerInfoProps {
    user: {
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
        starTier: number;
        userPicture: string;
        loanRepayment: number;
        bankDetails?: {
            bankName: string;
            accountNumber: number;
        };
        socials: {
            twitter: string;
            facebook: string;
            instagram: string;
        };
        guarantor?: {
            fullName: string;
            phoneNumber: string;
            emailAddress: string;
            relationship: string;
        };
    };
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ user }) => {
    return (
        <div className="customer-info container">
            <div className="section">

                <h3>Personal Information</h3>
                <div className="details-flex">
                    <p><strong>Full Name:</strong> {user.fullName}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    <p><strong>Email Address:</strong> {user.email}</p>
                    <p><strong>BVN:</strong> {user.bvn}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Marital Status:</strong> {user.maritalStatus}</p>
                    <p><strong>Children:</strong> {user.children}</p>
                    <p><strong>Type of Residence:</strong> {user.typeOfResidence}</p>
                </div>
            </div>

            <div className="section">
                <h3>Education and Employment</h3>
                <div className="details-flex">
                    <p><strong>Education Level:</strong> {user.educationLevel}</p>
                    <p><strong>Employment Status:</strong> {user.employmentStatus}</p>
                    <p><strong>Sector of Employment:</strong> {user.sectorOfEmployment}</p>
                    <p><strong>Duration of Employment:</strong> {user.durationOfEmployment} years</p>
                    <p><strong>Office Email:</strong> {user.officeEmail}</p>
                    <p><strong>Monthly Income:</strong> {user.monthlyIncome}</p>
                    <p><strong>Loan Repayment:</strong> {user.loanRepayment}</p>
                </div>
            </div>

            <div className="section">
                <h3>Socials</h3>
                <div className="details-flex">
                    <p><strong>Twitter:</strong> {user.socials.twitter}</p>
                    <p><strong>Facebook:</strong> {user.socials.facebook}</p>
                    <p><strong>Instagram:</strong> {user.socials.instagram}</p>
                </div>
            </div>

            {user.guarantor && (
                <div className="section">
                    <h3>Guarantor</h3>
                    <div className="details-flex">
                        <p><strong>Name:</strong> {user.guarantor.fullName}</p>
                        <p><strong>Phone Number:</strong> {user.guarantor.phoneNumber}</p>
                        <p><strong>Email Address:</strong> {user.guarantor.emailAddress}</p>
                        <p><strong>Relationship:</strong> {user.guarantor.relationship}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerInfo;
