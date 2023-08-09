import React from 'react';
import {Button, Card} from 'antd';
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const StartPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh'
            }}
        >
            <Card
                title="Система контроля проектов студентов"
                style={{
                    height: 350,
                    width: 600,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: "black"
                }}
            >
                <div
                    className="auth-page"
                >
                    <h1
                        className="auth-title"
                    >
                        <UserOutlined className="auth-icon"/>
                        Добро пожаловать!
                    </h1>
                    <p>
                        Мы предоставляем возможность управлять учебными проектами.
                        Здесь вы можете создавать, редактировать и отслеживать свои проекты,
                        делиться информацией с другими участниками и многое другое.
                    </p>
                    <p>
                        Пожалуйста, выберите действие:
                    </p>
                    <div
                        className="auth-buttons"
                    >
                        <Link to="/api/auth/signin">
                            <Button
                                type="primary"
                                size="large"
                                className="auth-button"
                                style={{
                                    backgroundColor: '#0053ff',
                                    width: 130,
                                    marginRight: 10
                                }}
                            >
                                Вход
                            </Button>
                        </Link>
                        <Link to="/api/auth/signup">
                            <Button
                                type="default"
                                size="large"
                                className="auth-button"
                                style={{
                                    width: 130
                                }}
                            >
                                Регистрация
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};
