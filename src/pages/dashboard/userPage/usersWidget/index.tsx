import React, { useEffect, useState } from 'react';
import './userWidget.scss';
import useApi from '../../../../services/useApi';
import loan from "../../../../assets/userpage/loan.png";
import active from "../../../../assets/userpage/actiive.png";
import savings from "../../../../assets/userpage/savings.png";
import users from "../../../../assets/userpage/users.png";

interface UserData {
    status: string;
    loanAmount: string | null;
    savings: string | null;
}

const UserStats: React.FC = () => {
    const apiUrl = 'https://run.mocky.io/v3/da1d36cb-bb92-483f-80ed-c472490cb509';
    const localStorageKey = 'userData';

    const { data: userData, loading, error } = useApi<UserData[]>(apiUrl, localStorageKey);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>No data available</div>;
    }

    const totalUsers = userData.length;
    const activeUsers = userData.filter(user => user.status === 'Active').length;
    const usersWithLoans = userData.filter(user => user.loanAmount !== null).length;
    const usersWithSavings = userData.filter(user => user.savings !== null).length;

    const stats = [
        { label: 'Total Users', value: totalUsers, icon: users },
        { label: 'Active Users', value: activeUsers, icon: active },
        { label: 'Users with Loans', value: usersWithLoans, icon: loan },
        { label: 'Users with Savings', value: usersWithSavings, icon: savings },
    ];

    return (
        <div className="user-stats">
            {stats.map((stat, index) => (
                <div key={index} className="container widget-content">
                    <img src={stat.icon} alt={`${stat.label} Icon`} className='widget-icon' />
                    <p className='widget-label'>{stat.label}</p>
                    <h3 className='widget-value'>{stat.value}</h3>
                </div>
            ))}

        </div>
    );
};

export default UserStats;