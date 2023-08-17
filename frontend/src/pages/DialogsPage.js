import React, {useState} from 'react';
import {Input, Button, List, Empty} from 'antd';
import MenuBar from '../components/MenuBar';
import DialogListItem from '../components/DialogListItem';
import CreateDialogModal from "../components/CreateDialogModal";
import {WechatOutlined} from "@ant-design/icons";

const DialogsPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogs, setDialogs] = useState([]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        if (selectedUser) {
            const newDialog = {
                id: dialogs.length + 1,
                user: selectedUser,
            };
            setDialogs([...dialogs, newDialog]);
            setIsModalVisible(false);
            setSelectedUser(null);
        }
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setSelectedUser(null);
    };

    return (
        <div>
            <MenuBar/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginTop: '-90px'
                }}
            >
                <div
                    style={{
                        width: '1260px',
                        marginLeft: '90px'
                    }}
                >
                    <Input
                        placeholder="Поиск диалогов по имени"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
                <Button type="primary" onClick={showModal}>
                    Создать чат
                </Button>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                {dialogs.length > 0 ? (
                    <List
                        dataSource={dialogs}
                        renderItem={dialog => (
                            <DialogListItem dialog={dialog}/>
                        )}
                    />
                ) : (
                    <Empty style={{marginTop: "150px"}}
                           image={<WechatOutlined style={{
                               fontSize: 64,
                               color: "rgba(0, 0, 0, 0.5)"
                           }}
                           />}
                           description={<span
                               style={{
                                   color: "rgba(0, 0, 0, 0.5)",
                                   fontSize: 20
                               }}>
                                Нет диалогов
                        </span>}
                    />
                )}
            </div>
            <CreateDialogModal
                isVisible={isModalVisible}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                onCreateDialog={handleModalOk}
                onCancel={handleModalCancel}
            />
        </div>
    );
};

export default DialogsPage;
