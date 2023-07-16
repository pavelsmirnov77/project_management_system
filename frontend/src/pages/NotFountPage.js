import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import React from "react";

export const NotFoundPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Такой страницы нет =("
            extra={<Button type="primary"><Link to="/">Назад на главную</Link></Button>}
        />
    )
}