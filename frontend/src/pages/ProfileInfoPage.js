import React, {useState} from "react";
import {Card, Avatar, Typography, Button, Upload, message} from "antd";
import {UserOutlined, LogoutOutlined, BackwardOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Title, Text} = Typography;

const UserProfilePage = () => {
    const [avatar, setAvatar] = useState(null);

    const handleLogout = () => {
        message.success("Вы успешно вышли! До свидания!")
    };

    const handleAvatarUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setAvatar(e.target.result);
            message.success("Аватарка успешно загружена");
        };
        reader.readAsDataURL(file);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh"
            }}>
            <Card
                style={{
                    width: 700,
                    height: 500,
                    backgroundColor: '#333232'
                }}
                cover={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 20
                        }}>
                        <Upload
                            accept=".png,.jpg,.jpeg"
                            showUploadList={false}
                            beforeUpload={(file) => {
                                handleAvatarUpload(file);
                                return false;
                            }}>
                            <div
                                style={{
                                    position: "relative",
                                    width: "200px",
                                    height: "200px",
                                    cursor: "pointer",
                                }}>
                                <Avatar
                                    size={200}
                                    icon={<UserOutlined/>}
                                    src={avatar}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    }}/>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                </div>
                            </div>
                        </Upload>
                    </div>
                }>
                <div>
                    <Title
                        level={2}
                        style={{
                            color: '#ffffff',
                            textAlign: 'center'
                        }}>
                        Информация о пользователе
                    </Title>
                </div>
                <div
                    style={{
                        margin: '20px 0'
                    }}>
                    <Text
                        style={{
                            fontSize: '20px',
                            color: '#ffffff'
                        }}>
                        Имя пользователя: user
                    </Text>
                </div>
                <div>
                    <Text
                        style={{
                            fontSize: '20px',
                            color: '#ffffff'
                        }}>
                        Email: user@mail.ru
                    </Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '30px'
                    }}>
                    <Link to="/main">
                        <Button
                            icon={<BackwardOutlined/>}
                            style={{
                                width: '120px',
                                marginRight: '10px'
                            }}>
                            Вернуться
                        </Button>
                    </Link>
                    <Link to="/api/auth/signin">
                        <Button
                            icon={<LogoutOutlined/>}
                            onClick={handleLogout}
                            style={{width: '120px'}}>
                            Выход
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default UserProfilePage;