import React, {useState} from 'react';
import {Form, Button, Card, Input, DatePicker, Upload, message, Modal, Select, Empty} from 'antd';
import {AppstoreAddOutlined, UploadOutlined} from '@ant-design/icons';
import MenuBar from '../components/MenuBar';
import '../css/homeworkPageStyle.css';

const {Option} = Select;

const disciplines = [
    'Высшая математика',
    'Физика',
    'Программирование',
    'Химия',
    'Английский язык'
];

const HomeworkPage = () => {
    const [form] = Form.useForm();
    const user = JSON.parse(localStorage.getItem("user"));
    const [homeworkList, setHomeworkList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const isHomeworkOverdue = (dueDate) => {
        const currentDateTime = new Date();
        const dueDateTime = new Date(dueDate);
        return currentDateTime > dueDateTime;
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
    };

    const handleDeleteHomework = (index) => {
        const updatedHomeworkList = homeworkList.filter((_, i) => i !== index);
        setHomeworkList(updatedHomeworkList);
        message.success('Домашнее задание удалено!');
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

    return (
        <div>
            <MenuBar/>
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
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
                    onCancel={handleCancel}>
                    <Form
                        form={form}
                        onFinish={handleCreateHomework}
                        onFinishFailed={onFinishFailed}
                        className="homework-form"
                    >
                        <Form.Item
                            name="title"
                            label="Заголовок домашнего задания"
                            rules={[{
                                required: true,
                                message: 'Введите заголовок домашнего задания'
                            }]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="description"
                            label="Описание"
                            rules={[{
                                required: true,
                                message: 'Введите описание домашнего задания'
                            }]}
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
                                    <Option key={index} value={discipline}>{discipline}</Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="dueDate"
                            label="Дата сдачи"
                            rules={[{required: true, message: 'Выберите дату сдачи'}]}
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
                                title={homework.title}
                                className="homework-card"
                                extra={<Button onClick={() => handleDeleteHomework(index)}>Удалить</Button>}
                            >
                                <div className="status-container">
                                    <div
                                        className="status-circle"
                                        style={{backgroundColor: isHomeworkOverdue(homework.dueDate) ? "red" : "green"}}
                                    />
                                    <p
                                        style={{color: isHomeworkOverdue(homework.dueDate) ? "red" : "green"}}
                                    >
                                        {
                                            isHomeworkOverdue(homework.dueDate) ? <strong>Просрочено</strong> :
                                                <strong>Активно</strong>
                                        }
                                    </p>
                                </div>
                                <p><strong>Описание:</strong> {homework.description}</p>
                                <p><strong>Дисциплина:</strong> {homework.discipline}</p>
                                <p><strong>Выложено:</strong> {homework.releaseDate}</p>
                                <p><strong>Дата сдачи:</strong> {homework.dueDate}</p>
                                <p><strong>Автор:</strong> {homework.author}</p>
                                <p><strong>Прикрепленные файлы:</strong></p>
                                <ul>
                                    {homework.files.map((file, idx) => (
                                        <li key={idx}>
                                            <a href={file.originFileObj.url} target="_blank" rel="noopener noreferrer"
                                               download>
                                                {file.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))
                    ) : (
                        <Empty style={{marginTop: "150px"}}
                               image={<AppstoreAddOutlined style={{
                                   fontSize: 64,
                                   color: "rgba(0, 0, 0, 0.5)"
                               }}
                               />}
                               description={<span
                                   style={{
                                       color: "rgba(0, 0, 0, 0.5)",
                                       fontSize: 20
                                   }}>
                                Домашних заданий нет
                        </span>}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeworkPage;
