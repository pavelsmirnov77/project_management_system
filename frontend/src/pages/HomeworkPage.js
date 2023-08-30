import React, {useState} from 'react';
import {
    Form,
    Button,
    Card,
    Input,
    DatePicker,
    Upload,
    message,
    Modal,
    Select,
    Empty,
    List,
} from 'antd';
import {
    AppstoreAddOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import MenuBar from '../components/MenuBar';
import '../css/homeworkPageStyle.css';

const {Option} = Select;

const disciplines = [
    'Высшая математика',
    'Физика',
    'Программирование',
    'Химия',
    'Английский язык',
];

const HomeworkPage = () => {
    const [form] = Form.useForm();
    const user = JSON.parse(localStorage.getItem('user'));
    const [homeworkList, setHomeworkList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCreateHomework = (values) => {
        const newHomework = {
            title: values.title,
            author: user.username,
            discipline: values.discipline,
            releaseDate: new Date().toLocaleString('ru-RU'),
            dueDate: values.dueDate.format('DD.MM.YYYY HH:mm:ss'),
            description: values.description,
            files: values.files,
        };

        setHomeworkList([...homeworkList, newHomework]);
        form.resetFields();
        message.success('Домашнее задание добавлено!');

        setComments([...comments, []]);
    };

    const handleDeleteHomework = (index) => {
        const updatedHomeworkList = homeworkList.filter((_, i) => i !== index);
        setHomeworkList(updatedHomeworkList);

        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);

        message.success('Домашнее задание удалено!');
    };

    const handleCommentSubmit = (homeworkIndex) => {
        if (commentText.trim() === '') {
            return;
        }

        const newComment = {
            author: user.username,
            avatar: user.avatar,
            content: <p>{commentText}</p>,
            datetime: new Date().toLocaleString(),
        };

        const updatedComments = [...comments];
        updatedComments[homeworkIndex] = updatedComments[homeworkIndex] || [];
        updatedComments[homeworkIndex] = [
            ...updatedComments[homeworkIndex],
            newComment,
        ];
        setComments(updatedComments);

        setCommentText('');
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const dummyRequest = ({onSuccess}) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };

    const Comment = ({userName, text, dateTime}) => {
        return (
            <div className="comment">
                <div className="comment-details">
                    <p className="user-name">
                        <strong>{userName}</strong>
                    </p>
                    <p className="comment-text">{text}</p>
                    <p className="comment-date-small">{dateTime}</p>
                </div>
            </div>
        );
    };


    return (
        <div>
            <MenuBar/>
            <div
                style={{
                    position: 'absolute',
                    top: '120px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button type="primary" onClick={showModal}>
                        Добавить домашнее задание
                    </Button>
                </div>

                <Modal
                    title="Добавить домашнее задание"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form
                        form={form}
                        onFinish={handleCreateHomework}
                        onFinishFailed={onFinishFailed}
                        className="homework-form"
                    >
                        <Form.Item
                            name="title"
                            label="Заголовок домашнего задания"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите заголовок домашнего задания',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="description"
                            label="Описание"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите описание домашнего задания',
                                },
                            ]}
                        >
                            <Input.TextArea/>
                        </Form.Item>

                        <Form.Item
                            name="discipline"
                            label="Дисциплина"
                            rules={[{required: true, message: 'Выберите дисциплину'}]}
                        >
                            <Select>
                                {disciplines.map((discipline, index) => (
                                    <Option key={index} value={discipline}>
                                        {discipline}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="dueDate"
                            label="Дата сдачи"
                            rules={[
                                {required: true, message: 'Выберите дату сдачи'},
                            ]}
                        >
                            <DatePicker showTime={{format: 'HH:mm:ss'}}/>
                        </Form.Item>

                        <Form.Item
                            name="files"
                            label="Прикрепить файлы"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload customRequest={dummyRequest} multiple>
                                <Button icon={<UploadOutlined/>}>Выбрать файлы</Button>
                            </Upload>
                        </Form.Item>
                    </Form>
                </Modal>

                <div className="homework-cards">
                    {homeworkList.length > 0 ? (
                        homeworkList.map((homework, index) => (
                            <Card
                                key={index}
                                title={
                                    <div className="card-title">
                                        {homework.title}
                                    </div>
                                }
                                className="homework-card"
                                extra={
                                    <Button onClick={() => handleDeleteHomework(index)}>
                                        Удалить
                                    </Button>
                                }
                            >
                                <p style={{fontSize: "20px"}}>
                                    {homework.description}
                                </p>
                                <p>
                                    <strong>Дисциплина:</strong> {homework.discipline}
                                </p>
                                <p>
                                    <strong>Выложено:</strong> {homework.releaseDate}
                                </p>
                                <p>
                                    <strong>Дата сдачи:</strong> {homework.dueDate}
                                </p>
                                <p>
                                    <strong>Автор:</strong> {homework.author}
                                </p>
                                <p>
                                    <strong>Прикрепленные файлы:</strong>
                                </p>
                                <ul>
                                    {homework.files.map((file, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={file.originFileObj.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                            >
                                                {file.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div>
                                    <h2>Комментарии</h2>
                                    {comments[index] && comments[index].length > 0 ? (
                                        <List
                                            dataSource={comments[index]}
                                            renderItem={(comment, idx) => (
                                                <Comment
                                                    key={idx}
                                                    userName={comment.author}
                                                    text={comment.content}
                                                    dateTime={comment.datetime}
                                                />
                                            )}
                                        />
                                    ) : (
                                        <p>Комментариев нет</p>
                                    )}
                                    <Input.TextArea
                                        placeholder="Оставьте комментарий"
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                    <Button
                                        type="primary"
                                        onClick={() => handleCommentSubmit(index)}
                                        style={{marginTop: '8px'}}
                                    >
                                        Отправить
                                    </Button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <Empty
                            style={{marginTop: '150px'}}
                            image={
                                <AppstoreAddOutlined
                                    style={{
                                        fontSize: 64,
                                        color: 'rgba(0, 0, 0, 0.5)',
                                    }}
                                />
                            }
                            description={
                                <span
                                    style={{
                                        color: 'rgba(0, 0, 0, 0.5)',
                                        fontSize: 20,
                                    }}
                                >
                  Домашних заданий нет
                </span>
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeworkPage;
