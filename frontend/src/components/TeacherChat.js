import React, {useState} from 'react';
import {Input, Button, List, Avatar, Empty, Dropdown, Menu, Modal} from 'antd';
import {SendOutlined, EllipsisOutlined} from '@ant-design/icons';
import '../css/teacherChatStyle.css';

const TeacherChat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const handleMessageSubmit = () => {
        if (messageInput.trim() === '') {
            return;
        }

        if (editingIndex !== null) {
            const updatedMessages = [...messages];
            updatedMessages[editingIndex].text = messageInput;
            setMessages(updatedMessages);
            setEditingIndex(null);
        } else {
            const newMessage = {
                text: messageInput,
                sender: user.username,
                timestamp: new Date(),
            };
            setMessages([...messages, newMessage]);
        }

        setMessageInput('');
    };

    const handleDeleteMessage = (index) => {
        const updatedMessages = [...messages];
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
    };

    const handleEditMessage = (index) => {
        setEditingIndex(index);
        setMessageInput(messages[index].text);
        setEditModalVisible(true);
    };

    const handleEditModalOk = () => {
        handleMessageSubmit();
        setEditModalVisible(false);
    };

    const handleEditModalCancel = () => {
        setEditingIndex(null);
        setMessageInput('');
        setEditModalVisible(false);
    };

    const menu = (index) => (
        <Menu>
            <Menu.Item key="delete" onClick={() => handleDeleteMessage(index)}>
                Удалить
            </Menu.Item>
            <Menu.Item key="edit" onClick={() => handleEditMessage(index)}>
                Редактировать
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="teacher-chat">
            <div className="chat-header">Чат</div>
            <div className="chat-messages">
                {messages.length > 0 ? (
                    <List
                        itemLayout="horizontal"
                        dataSource={messages}
                        renderItem={(item, index) => (
                            <List.Item>
                                <div className="message-card">
                                    <List.Item.Meta
                                        avatar={<Avatar>{item.sender[0]}</Avatar>}
                                        title={
                                            <div className="message-header">
                                                <span className="sender-name"
                                                      style={{marginRight: '360px'}}>{item.sender}</span>
                                                <Dropdown overlay={menu(index)} trigger={['hover']}>
                                                    <Button
                                                        type="text"
                                                        icon={<EllipsisOutlined/>}
                                                        className="more-options-button"
                                                    />
                                                </Dropdown>
                                            </div>
                                        }
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
                    <Empty description="Нет сообщений"/>
                )}
            </div>
            <div className="input-area">
                <Input
                    placeholder="Введите сообщение..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onPressEnter={handleMessageSubmit}
                />
                <Button
                    type="primary"
                    icon={<SendOutlined/>}
                    onClick={handleMessageSubmit}
                >
                    Отправить
                </Button>
            </div>
            <Modal
                title="Редактирование сообщения"
                visible={editModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleEditModalCancel}
            >
                <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
            </Modal>
        </div>
    );
};

export default TeacherChat;
