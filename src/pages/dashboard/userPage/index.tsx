import React from 'react';
import { WrapperContainer } from '../../../components';
import {Table} from '../../../components';
import useApi from '../../../services/useApi';
import './userPage.scss';
import LoadingSpinner from '../../../components/loadingSpinner';
import UserStats from './usersWidget';
import filter from "../../../assets/userpage/filter-results-button.png"
import dot from "../../../assets/userpage/dot.png"

// Define the shape of each user object from the API response
interface UserData {
    fullName: string;
    phoneNumber: string;
    email: string;
    organization: string;
    dateJoined: string;
    status: string;
}

const Component: React.FC = () => {
    const apiUrl = import.meta.env.VITE_USER_ENPOINT;
    const localStorageKey = 'userData'; 

    const { data, loading, error } = useApi<UserData[]>(apiUrl, localStorageKey);

    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    // Define table columns with the same image
    const columns = [
        {
            header: (
                <div className='header'>
                    <span>Organization</span>
                    <img src={filter} alt="Icon"  />
                </div>
            ),
            accessor: 'organization'
        },
        {
            header: (
                <div className='header'>
                    <span>Email</span>
                    <img src={filter} alt="Icon"  />
                </div>
            ),
            accessor: 'email'
        },
        {
            header: (
                <div className='header'>
                    <span>Username</span>
                    <img src={filter} alt="Icon"  />
                </div>
            ),
            accessor: 'username'
        },
        {
            header: (
                <div className='header'>
                    <span>Phone Number</span>
                    <img src={filter} alt="Icon"/>
                </div>
            ),
            accessor: 'phoneNumber'
        },
        {
            header: (
                <div className='header'>
                    <span>Date Joined</span>
                    <img src={filter} alt="Icon"  />
                </div>
            ),
            accessor: 'dateJoined'
        },
        {
            header: (
                <div className='header'>
                    <span>Status</span>
                    <img src={filter} alt="Icon" />
                </div>
            ),
            accessor: 'status'
        },
    ];

    // Process data to include images in status
    const tableData = data.map((user: UserData) => ({
        organization: user.organization,
        email: user.email,
        username: user.fullName,
        phoneNumber: user.phoneNumber,
        dateJoined: user.dateJoined,
        status: (
            <div className='status'>
                <span  className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                <img src={dot} alt="Status Icon" />
            </div>
        ),
    }));

    return (
        <div className='widget-container'>
            <UserStats />
            <Table
                columns={columns}
                data={tableData}
            />
        </div>
    );
};

const Users = WrapperContainer(Component);

export default Users;
