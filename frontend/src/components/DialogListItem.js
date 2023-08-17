import React from 'react';
import { List, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
import '../css/dialogListStyle.css';

const DialogListItem = ({ dialog }) => {
    const { user, lastMessage, timestamp } = dialog;

    return (
        <div className="dialog-card-container">
            <Link to={`/chat/${user.id}`}>
                <Card className="dialog-card">
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{user.username[0]}</Avatar>}
                            title={<span>{user.username}</span>}
                            description={
                                <>
                                    <p className="message-text">{lastMessage && lastMessage.text}</p>
                                    <p className="timestamp">{timestamp ? timestamp.toLocaleString() : ''}</p>
                                </>
                            }
                        />
                    </List.Item>
                </Card>
            </Link>
        </div>
    );
};

export default DialogListItem;
