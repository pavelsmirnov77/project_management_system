import {Button, Card, Form, Input, message, Radio} from "antd";
import React, {useState} from "react";
import {LockOutlined, MailOutlined, UserAddOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import authService from "../services/authService";

const RegistrationPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        authService.register(values)
            .then(() => {
                message.success('Вы успешно зарегистрированы');
                navigate('/api/auth/signin');
            })
            .catch((error) => {
                message.error('Ошибка при регистрации');
                console.error(error);
            });
    };

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '120vh'
            }}>
            <Card
                title="Регистрация"
                style={{
                    width: 400,
                    borderWidth: 1,
                    borderColor: 'black'
                }}>
                <Form
                    form={form}
                    layout="vertical"
                    name="register"
                    onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Имя"
                        rules={[{
                            required: true,
                            message: 'Введите имя'
                        }]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Имя"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Псевдоним"
                        rules={[{
                            required: true,
                            message: 'Введите псевдоним'
                        }]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Псевдоним"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{
                            required: true,
                            message: 'Введите email'
                        },
                            {
                                type: 'email',
                                message: 'Некорректный email'
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined/>}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label="Роль"
                        rules={[{
                            required: true,
                            message: 'Выберете свою роль'
                        }]}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio
                                value={1}
                            >
                                Студент
                            </Radio>
                            <Radio
                                value={2}
                            >
                                Преподаватель
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Дополнительная информация"
                        rules={[{
                            required: false,
                            message: 'Дополнительная информация'
                        }]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Введите дополнительную информацию (должность, группу и т.п.)"
                            maxLength={255}
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
                                backgroundColor: '#2867fa'
                            }}
                            type="primary"
                            icon={<UserAddOutlined/>}
                            htmlType="submit" block>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '20px'
                    }}>
                    <span>Уже зарегистрированы?</span>{" "}
                    <Link to="/api/auth/signin">Войдите в аккаунт</Link>
                </div>
            </Card>
        </div>
    );
};

export default RegistrationPage;