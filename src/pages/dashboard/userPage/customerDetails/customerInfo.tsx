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
        guarantors?: Array<{
            fullName: string;
            phoneNumber: string;
            emailAddress: string;
            relationship: string;
        }>;
    };
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ user }) => {
    console.log(user);
    return (
        <div className="customer-info container">
            <div className="section">
                <h3>Personal Information</h3>
                <div className="details-grid">
                    <div>
                        <p>FULL NAME</p>
                        <p className="details">{user.fullName}</p>
                    </div>
                    <div>
                        <p>PHONE NUMBER</p>
                        <p className="details">{user.phoneNumber}</p>
                    </div>
                    <div>
                        <p>EMAIL ADDRESS</p>
                        <p className="details">{user.email}</p>
                    </div>
                    <div>
                        <p>BVN</p>
                        <p className="details">{user.bvn}</p>
                    </div>
                    <div>
                        <p>GENDER</p>
                        <p className="details">{user.gender}</p>
                    </div>
                    <div>
                        <p>MARITAL STATUS</p>
                        <p className="details">{user.maritalStatus}</p>
                    </div>
                    <div>
                        <p>CHILDREN</p>
                        <p className="details">{user.children}</p>
                    </div>
                    <div>
                        <p>TYPE OF RESIDENCE</p>
                        <p className="details">{user.typeOfResidence}</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="section">
                <h3>Education and Employment</h3>
                <div className="details-grid">
                    <div>
                        <p>EDUCATION LEVEL</p>
                        <p className="details">{user.educationLevel}</p>
                    </div>
                    <div>
                        <p>EMPLOYMENT STATUS</p>
                        <p className="details">{user.employmentStatus}</p>
                    </div>
                    <div>
                        <p>SECTOR OF EMPLOYMENT</p>
                        <p className="details">{user.sectorOfEmployment}</p>
                    </div>
                    <div>
                        <p>DURATION OF EMPLOYMENT</p>
                        <p className="details">{user.durationOfEmployment} years</p>
                    </div>
                    <div>
                        <p>OFFICE EMAIL</p>
                        <p className="details">{user.officeEmail}</p>
                    </div>
                    <div>
                        <p>MONTHLY INCOME</p>
                        <p className="details">{user.monthlyIncome}</p>
                    </div>
                    <div>
                        <p>LOAN REPAYMENT</p>
                        <p className="details">{user.loanRepayment}</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="section">
                <h3>Socials</h3>
                <div className="details-grid">
                    <div>
                        <p>TWITTER</p>
                        <p className="details">{user.socials.twitter}</p>
                    </div>
                    <div>
                        <p>FACEBOOK</p>
                        <p className="details">{user.socials.facebook}</p>
                    </div>
                    <div>
                        <p>INSTAGRAM</p>
                        <p className="details">{user.socials.instagram}</p>
                    </div>
                </div>
            </div>

            <hr />

            {user.guarantors && user.guarantors.length > 0 && (
                <div className="section">
                    <h3>Guarantors</h3>
                    {user.guarantors.map((guarantor, index) => (
                        <React.Fragment key={index}>
                            <div className="details-grid">
                                <div>
                                    <p>FULL NAME</p>
                                    <p className="details">{guarantor.fullName}</p>
                                </div>
                                <div>
                                    <p>PHONE NUMBER</p>
                                    <p className="details">{guarantor.phoneNumber}</p>
                                </div>
                                <div>
                                    <p>EMAIL ADDRESS</p>
                                    <p className="details">{guarantor.emailAddress}</p>
                                </div>
                                <div>
                                    <p>RELATIONSHIP</p>
                                    <p className="details">{guarantor.relationship}</p>
                                </div>
                            </div>
                            {/* {index < user.guarantors.length - 1  && <hr />} */}

                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomerInfo;
