import React, { useState, useEffect, useCallback } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserInfo from './UserInfo';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import axios from 'axios';
import { API_BASE_URL } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';


const UserList = () => {

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
			render: (_, record) => (
				<div className="d-flex" onClick={() => console.log(record)} style={{cursor: 'pointer'}}>
					<AvatarStatus src={userData[record.id - 1].img} name={record.name} subTitle={record.email}/>
				</div>
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
			title: 'Role',
			dataIndex: 'role',
			sorter: {
				compare: (a, b) => a.role.length - b.role.length,
			},
		},
		{
			title: 'Last online',
			dataIndex: 'lastOnline',
			render: date => (
				<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
			),
			sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: status => (
				<Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
			),
			sorter: {
				compare: (a, b) => a.status.length - b.status.length,
			},
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

export default UserList