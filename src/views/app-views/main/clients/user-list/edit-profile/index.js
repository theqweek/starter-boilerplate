import React, { useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message,} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { Redirect} from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from 'configs/AppConfig';

const EditProfile = ({location}) => {
  const [isEdited, setIsEdited] = useState(false)

  if(!location.state) return <Redirect to={`/app/main/clients/user-list`} />

  const { id, name, username, img, email, phone, website, address } = location.state;
  

  const onFinish = async (values) => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key });
    try {
       const response = await axios.put(`${API_BASE_URL}/users/${id}`, {
        name: values.name,
        username: values.username,
        email: values.email,
        img: img,
        dateOfBirth: values.dateOfBirth,
        phoneNumber: values.phoneNumber,
        website: values.website,
        address: values.address,
				city: values.city,
				postcode: values.postcode
      }
      );
      console.log('Returned data: ', response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
    setTimeout(() => {
      message.success({ content: 'Done!', key, duration: 2 });
      setIsEdited(true);
    }, 1000);
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    isEdited ? <Redirect to={`/app/main/clients/user-list`} /> : 
    <>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={img} icon={<UserOutlined />}/>
      </Flex>
      <div className="mt-4">
        <Form 
          name="basicInformation"
          layout="vertical"
          initialValues={
            { 
              'name': name,
              'email': email,
              'username': username,
              'phoneNumber': phone,
              'website': website,
              'address': address.street,
              'city': address.city,
              'postcode': address.zipcode
            }
          }
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!'
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ 
                      required: true,
                      type: 'email',
                      message: 'Please enter a valid email!' 
                    }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Date of Birth"
                    name="dateOfBirth"
                  >
                    <DatePicker className="w-100"/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Website"
                    name="website"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="City"
                    name="city"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Post code"
                    name="postcode"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default EditProfile