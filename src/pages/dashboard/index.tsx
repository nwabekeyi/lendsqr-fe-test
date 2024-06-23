import React from 'react';
import { WrapperContainer } from '../../components';
import {Table} from '../../components';


const Component: React.FC = () => {

  const columns = ['Name', 'Age', 'Email'];
const data = [
  { Name: 'John Doe', Age: 28, Email: 'john.doe@example.com' },
  { Name: 'Jane Smith', Age: 32, Email: 'jane.smith@example.com' },
  { Name: 'Bob Johnson', Age: 45, Email: 'bob.johnson@example.com' },
];
  return (
    <div>
    
    <Table columns={columns} data={data}/>
  </div>

  )
  ;
};

const Dashboard: React.FC = WrapperContainer(Component);
export default Dashboard;
