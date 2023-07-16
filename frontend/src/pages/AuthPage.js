import {Button, Card, Form, Input, message} from 'antd';
import {UserOutlined, LockOutlined, LoginOutlined} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import "../css/pagesStyles.css"

const AuthPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        message.success("Вы успешно вошли в систему!")
        navigate("/main")
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '60vh'
            }}
        >
            <Card
                title="Авторизация"
                style={{
                    width: 500,
                    borderWidth: 1,
                    borderColor: 'black'
                }}
            >
                <Form
                    name="normal_login"
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        label="Логин"
                        rules={[{
                            required: true,
                            message: 'Введите логин'
                        }]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Логин"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Пароль"
                        rules={[{
                            required: true,
                            message: 'Введите пароль'
                        }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined/>}
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{
                                backgroundColor: '#333232'
                            }}
                            type="primary"
                            icon={<LoginOutlined/>}
                            htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '20px'
                    }}>
                    <span>У вас нет аккаунта?</span>{" "}
                    <Link to="/api/auth/signup">Зарегистрируйтесь</Link>
                </div>
            </Card>
        </div>
    );
};
export default AuthPage;