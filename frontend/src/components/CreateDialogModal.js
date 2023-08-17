import React, { useState } from 'react';
import { Modal, Input, Button, List, Empty } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CreateDialogModal = ({ isVisible, selectedUser, setSelectedUser, onCreateDialog, onCancel }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const users = [
        { id: 1, username: 'Oleg' },
        { id: 2, username: 'Vitaliy' },
        { id: 3, username: 'Maria' },
    ];

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Modal
            title="Создать диалог"
            visible={isVisible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Отмена
                </Button>,
                selectedUser && (
                    <Button key="create" type="primary" onClick={onCreateDialog}>
                        Создать диалог с {selectedUser.username}
                    </Button>
                )
            ]}
        >
            <Input
                placeholder="Введите имя пользователя"
                value={searchValue}
                onChange={handleSearchChange}
            />
            {filteredUsers.length > 0 ? (
                <List
                    dataSource={filteredUsers}
                    renderItem={user => (
                        <List.Item onClick={() => handleUserSelect(user)}>
                            {user.username}
                        </List.Item>
                    )}
                />
            ) : (
                <Empty
                    image={<UserOutlined />}
                    imageStyle={{ fontSize: '48px', color: '#ccc' }}
                    description="Пользователей нет"
                />
            )}
        </Modal>
    );
};

export default CreateDialogModal;
