// TeacherChat.js
import React, { useState } from 'react';
import { Input, Button, List, Avatar, Empty } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import '../css/teacherChatStyle.css';

const TeacherChat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const user = JSON.parse(localStorage.getItem("user"));

    const handleMessageSubmit = () => {
        if (messageInput.trim() === '') {
            return;
        }

        const newMessage = {
            text: messageInput,
            sender: user.username,
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);
        setMessageInput('');
    };

    return (
        <div className="teacher-chat">
            <div className="chat-header">Чат</div>
            <div className="chat-messages">
                {messages.length > 0 ? (
                    <List
                        itemLayout="horizontal"
                        dataSource={messages}
                        renderItem={item => (
                            <List.Item>
                                <div className="message-card">
                                    <List.Item.Meta
                                        avatar={<Avatar>{item.sender[0]}</Avatar>}
                                        title={<span className="sender-name">{item.sender}</span>}
                                        description={
                                            <>
                                                <p className="message-text">{item.text}</p>
                                                <p className="timestamp">{item.timestamp.toLocaleString()}</p>
                                            </>
                                        }
                                    />
                                </div>
                            </List.Item>
                        )}
                    />
                ) : (
                    <Empty description="Нет сообщений" />
                )}
            </div>
            <div className="input-area">
                <Input
                    placeholder="Введите сообщение..."
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    onPressEnter={handleMessageSubmit}
                />
                <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleMessageSubmit}
                >
                    Отправить
                </Button>
            </div>
        </div>
    );
};

export default TeacherChat;
