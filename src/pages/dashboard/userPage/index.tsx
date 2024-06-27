import React, { useState, useEffect, useRef } from 'react';
import { WrapperContainer } from '../../../components';
import { Table } from '../../../components';
import useApi from '../../../services/useApi';
import './userPage.scss';
import LoadingSpinner from '../../../components/loadingSpinner';
import UserStats from './usersWidget';
import filterIcon from "../../../assets/userpage/filter-results-button.png";
import dotIcon from "../../../assets/userpage/dot.png";
import { InputField } from '../../../components';
import Dropdown from '../../../components/dropDown/dropDown';
import CustomerDetails from './customerDetails';
import view from "../../../assets/table-dropdown/eye.png";
import blacklist from "../../../assets/table-dropdown/blacklist.png"
import activate from "../../../assets/table-dropdown/activate.png";
import calender from "../../../assets/table-dropdown/calendar (1).png"
import {Button} from '../../../components';



interface UserData {
    fullName: string;
    phoneNumber: string;
    email: string;
    organization: string;
    dateJoined: string;
    status: string;
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
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantors: {
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        relationship: string;
    }[];
    starTier: number;
    bankDetails: {
        bankName: string;
        accountNumber: number;
    };
    userPicture: string;
    loanAmount: string;
    savings: string | null;
}

const Users: React.FC = () => {

    const apiUrl = import.meta.env.VITE_USER_ENPOINT;
    const localStorageKey = 'userData';

    const { data, loading, error } = useApi<UserData[]>(apiUrl, localStorageKey);


    const [filterDropdownVisible, setFilterDropdownVisible] = useState<boolean>(false);
    const [statusDropdownVisible, setStatusDropdownVisible] = useState<boolean[]>([]); // Array to manage multiple status dropdowns
    const [activeFilterIndex, setActiveFilterIndex] = useState<number | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
    const [statusDropdownPositions, setStatusDropdownPositions] = useState<{ [key: number]: { top: number; left: number } }>({});

    const [selectedOrganization, setSelectedOrganization] = useState<string | number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | number | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | number | null>(null);
    const [filterEmail, setFilterEmail] = useState<string>('');
    const [filterUsername, setFilterUsername] = useState<string>('');
    const [filterPhoneNumber, setFilterPhoneNumber] = useState<string>('');

    const [filteredData, setFilteredData] = useState<UserData[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null); // New state to manage the selected user

    const filterDropdownRef = useRef<HTMLDivElement>(null);
    const statusDropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
                setFilterDropdownVisible(false);
            }

            statusDropdownRefs.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target as Node)) {
                    setStatusDropdownVisible(prevState => {
                        const newState = [...prevState];
                        newState[index] = false;
                        return newState;
                    });
                }
            });
        }

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleFilterDropdown = (index: number, event: React.MouseEvent<HTMLImageElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const dropdownTop = rect.bottom + window.scrollY + 20;
        const dropdownLeft = rect.left + window.scrollX - 100;

        setDropdownPosition({ top: dropdownTop, left: dropdownLeft });
        setFilterDropdownVisible(!filterDropdownVisible || activeFilterIndex !== index);
        setActiveFilterIndex(index);
    };

    const toggleStatusDropdown = (index: number, event: React.MouseEvent<HTMLImageElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const dropdownTop = rect.bottom + window.scrollY;
        const dropdownLeft = rect.left + window.scrollX - 150;

        setStatusDropdownVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

        setStatusDropdownPositions(prevState => ({
            ...prevState,
            [index]: { top: dropdownTop, left: dropdownLeft }
        }));
    };

    const handleFilter = () => {
        const filtered = data.filter(user => {
            const organizationMatch = !selectedOrganization || user.organization.toLowerCase() === selectedOrganization.toString().toLowerCase();
            const dateMatch = !selectedDate || user.dateJoined.toLowerCase().includes(selectedDate.toString().toLowerCase());
            const statusMatch = !selectedStatus || user.status.toLowerCase() === selectedStatus.toString().toLowerCase();
            const emailMatch = !filterEmail || user.email.toLowerCase().includes(filterEmail.toLowerCase());
            const usernameMatch = !filterUsername || user.fullName.toLowerCase().includes(filterUsername.toLowerCase());
            const phoneNumberMatch = !filterPhoneNumber || user.phoneNumber.toLowerCase().includes(filterPhoneNumber.toLowerCase());

            return (
                organizationMatch &&
                dateMatch &&
                statusMatch &&
                emailMatch &&
                usernameMatch &&
                phoneNumberMatch
            );
        });
        setFilteredData(filtered);
    };

    const handleReset = () => {
        setSelectedOrganization(null);
        setSelectedDate(null);
        setSelectedStatus(null);
        setFilterEmail('');
        setFilterUsername('');
        setFilterPhoneNumber('');
        setFilteredData(data);
    };

    const handleViewDetails = (user: UserData) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <div>Error: {error}</div>;

    const organizations = [
        { value: 'Lendsqr', label: 'Lendsqr' },
        { value: 'Paystack', label: 'Paystack' },
        { value: 'Others', label: 'Others' }
    ];

    const statuses = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'pending', label: 'Pending' }
    ];

    const dates = [
        { value: 'lastWeek', label: 'Last Week' },
        { value: 'lastMonth', label: 'Last Month' },
        { value: 'lastYear', label: 'Last Year' }
    ];

    const columns = [
        {
            header: (
                <div className='header'>
                    <span>Organization</span>
                    <img
                        src={filterIcon}
                        alt="Filter Icon"
                        onClick={(e) => toggleFilterDropdown(0, e)}
                    />
                </div>
            ),
            accessor: 'organization'
        },
        {
            header: (
                <div className='header'>
                    <span>Email</span>
                    <img
                        src={filterIcon}
                        alt="Filter Icon"
                        onClick={(e) => toggleFilterDropdown(1, e)}
                    />
                </div>
            ),
            accessor: 'email'
        },
        {
            header: (
                <div className='header'>
                    <span>Username</span>
                    <img
                        src={filterIcon}
                        alt="Filter Icon"
                        onClick={(e) => toggleFilterDropdown(2, e)}
                    />
                </div>
            ),
            accessor: 'username'
        },
        {
            header: (
                <div className='header'>
                    <span>Phone Number</span>
                    <img
                        src={filterIcon}
                        alt="Filter Icon"
                        onClick={(e) => toggleFilterDropdown(3, e)}
                    />
                </div>
            ),
            accessor: 'phoneNumber'
        },
        {
            header: (
                <div className='header'>
                    <span>Date Joined</span>
                    <img
                        src={filterIcon}
                        alt="Filter Icon"
                        onClick={(e) => toggleFilterDropdown(4, e)}
                    />
                </div>
            ),
            accessor: 'dateJoined'
        },
        {
            header: (
                <div className='header'>
                    <span>Status</span>
                    <img
                        src={filterIcon}
                        alt="Dot Icon"
                    />
                </div>
            ),
            accessor: 'status'
        },
    ];

    const tableData = filteredData.map((user: UserData, index) => ({
        organization: user.organization,
        email: user.email,
        username: user.fullName,
        phoneNumber: user.phoneNumber,
        dateJoined: user.dateJoined,
        status: (
            <div className='status'>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                <img src={dotIcon} alt="Status Icon" onClick={(e) => toggleStatusDropdown(index, e)} />
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

            {filterDropdownVisible && activeFilterIndex !== null && dropdownPosition && (
                <div ref={filterDropdownRef} className="dropdown filter" style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
                    <div>
                        <label className='label'>Organization</label>
                        <Dropdown
                            options={organizations}
                            value={selectedOrganization}
                            onSelect={setSelectedOrganization}
                            placeholder="Select organization"
                            field
                        />
                    </div>
                    <div>
                        <label>Username</label>
                        <InputField
                            placeholder="User"
                            value={filterUsername}
                            onChange={e => setFilterUsername(e.target.value)}
                            fieldType="field"
                            />
                    </div>
                    <div>
                        <label>Email</label>
                        <InputField
                            placeholder="Email"
                            value={filterEmail}
                            onChange={e => setFilterEmail(e.target.value)}
                            fieldType="field"

                        />
                    </div>
                    <div>
                        <label className='label'>Date</label>
                        <Dropdown
                            options={dates}
                            value={selectedDate}
                            onSelect={setSelectedDate}
                            placeholder="Select date"
                            field
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <InputField
                            placeholder="Phone Number"
                            value={filterPhoneNumber}
                            onChange={e => setFilterPhoneNumber(e.target.value)}
                            fieldType="field"
                            />
                    </div>
                    <div>
                        <label className='label'>Status</label>
                        <Dropdown
                            options={statuses}
                            value={selectedStatus}
                            onSelect={setSelectedStatus}
                            placeholder="Select status"
                            field
                        />
                    </div>
                    <div className='filter-buttons'>
                        <Button reset buttonText="reset" onClick={handleReset}>Reset</Button>
                        <Button  buttonText="Filter"  onClick={handleFilter}>Filter</Button>
                    </div>
                </div>
            )}

            {isModalVisible && selectedUser && (
                <CustomerDetails
                    onClose={() => setIsModalVisible(false)}
                    user={selectedUser}
                />
            )}

            {statusDropdownVisible.map((isVisible, index) => isVisible && statusDropdownPositions[index] && (
                <div ref={el => statusDropdownRefs.current[index] = el} className="dropdown" style={{ top: statusDropdownPositions[index].top, left: statusDropdownPositions[index].left }} key={index}>
                    <div>
                        <div className="status-list"><img src={view} alt="eye icon" /><p onClick={() => handleViewDetails(filteredData[index])}>View details</p></div>
                        <div className="status-list"><img src={blacklist} alt="eye icon" /><p >Blacklist user</p></div>
                        <div className="status-list"><img src={activate} alt="eye icon" /><p>Activate user</p></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const WrappedUsers = WrapperContainer(Users);

export default WrappedUsers;
