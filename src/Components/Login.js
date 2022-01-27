import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd'

const Login = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'center', backgroundColor: 'gray' }}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        {
                            type: 'email',
                            message: 'Please Enter Valid Email!'
                        }
                        ]}
                    >
                        <Input placeholder='Enter email here'/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password placeholder='Enter password here' />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}

export default Login;