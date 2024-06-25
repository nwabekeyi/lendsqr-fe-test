// src/components/UserStats/UserStats.tsx
import React from 'react';
import './userWidget.scss';
import useApi  from '../../../../services/useApi';
import loan from "../../../../assets/userpage/loan.png"
import active from "../../../../assets/userpage/actiive.png"
import savings from "../../../../assets/userpage/savings.png"
import users from "../../../../assets/userpage/users.png"


interface UserData {
    status: string;
    loanAmount: string | null;
    savings: string | null
}

const UserStats: React.FC = () => {
    const apiUrl = import.meta.env.VITE_USER_ENDPOINT; // Make sure your env variable is correctly named
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
    const activeUsers = userData.filter((user: any) => user.status === 'Active').length;
    const usersWithLoans = userData.filter((user: any) => user.loanAmount !== null).length;
    const usersWithSavings = userData.filter((user: any) => user.savings !== null).length;

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
