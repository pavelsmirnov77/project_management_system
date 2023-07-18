import {Button, Card, Form, Input, message} from 'antd';
import {UserOutlined, LockOutlined, LoginOutlined} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import "../css/pagesStyles.css"
import {useDispatch} from "react-redux";
import {login} from "../slices/authSlice";
import authService from "../services/authService";

const AuthPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        authService.login(values).then((user) => {
            console.log(user)
            dispatch(login(user))
            message.success("Вы успешно вошли в систему! Здравствуйте!")
            navigate("/main")
        }, (error) => {
            const _content = (error.response && error.response.data) || error.message || error.toString();
            console.log(_content);
            message.error("Неверно указан логин или пароль!")
        });
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
                        name="login"
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
                    }}
                >
                    <span>У вас нет аккаунта?</span>{" "}
                    <Link to="/api/auth/signup">Зарегистрируйтесь</Link>
                </div>
            </Card>
        </div>
    );
};
export default AuthPage;