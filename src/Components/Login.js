import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd'

const Login = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    requiredMark={false}
                    style={{ width: '50%' }}
                    // onFinishFailed={onFinishFailed}
                    >
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>LOGIN FORM</h1>
                    <Form.Item
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'Please Enter Valid Email!'
                        }
                        ]}
                    >
                        <Input placeholder='Enter email here' style={{ borderRadius: '5px' }} />
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
                        <Input.Password placeholder='Enter password here' style={{ borderRadius: '5px' }} />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" block htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}

export default Login;