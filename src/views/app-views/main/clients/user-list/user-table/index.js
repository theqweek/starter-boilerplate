import React, { useState, useEffect, useCallback } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserInfo from './UserInfo';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import axios from 'axios';
import { API_BASE_URL } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';
import { Link } from 'react-router-dom';



const UserTable = (props) => {

  const [users, setUsers] = useState()
	const [userProfileVisible, setUserProfileVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState({});

  const getData = useCallback(async (api) => {

		const response = await axios.get(`${api}/users`);
		const data = await response.data;
		
		setUsers(data);
	}, [])

  useEffect(() => {
		try {
			getData(API_BASE_URL)
		} catch (e) {
			console.error(e)
		}

  }, [getData])
  

  const deleteUser = (userId) => {
		setUsers(users => users.filter(item => item.id !== userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = (userInfo) => {
		setUserProfileVisible(true);
		setSelectedUser(userInfo);
	};
	
	const closeUserProfile = () => {
		setUserProfileVisible(false);
		setSelectedUser({});
	}

	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, user) => (
        <Link to={{pathname: `${props.match.path}/edit-profile`, state: {...user, img: userData[user.id - 1].img}}}>
          <div className="d-flex" >
					  <AvatarStatus src={userData[user.id - 1].img} name={user.name} subTitle={user.email}/>
				  </div>
        </Link>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'City',
			dataIndex: 'address',
			render: (address) => (
				<span>{address.city}</span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.address.city.toLowerCase();
					b = b.address.city.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Company',
			dataIndex: 'company',
			render: (company) => (
				<span>{company.name} </span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.company.name.toLowerCase();
					b = b.company.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			}
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			render: (phone) => (
				<span>{phone}</span>
			),
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUser(elm.id)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];

  return (
    users ? <Card bodyStyle={{'padding': '0px'}}>
			<Table columns={tableColumns} dataSource={users} rowKey='id'/>
			<UserInfo data={selectedUser} visible={userProfileVisible} close={() => closeUserProfile()}/>
		</Card> : <Loading cover="content"/>
  )
}

export default UserTable