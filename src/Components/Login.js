import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd'

const Login = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Form
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Email"
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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default Login;