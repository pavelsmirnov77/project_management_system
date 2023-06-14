<#import "template.ftlh" as t />
<@t.template user>
    <title>Авторизация</title>
    <link rel="stylesheet" type="text/css" href="/static/css/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <block>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mt-5">
                    <div class="card-header">
                        <h5 class="card-title">Авторизация</h5>
                    </div>
                    <div class="card-body">
                        <form action="/login" method="post">
                            <div class="form-group">
                                <label for="username">Имя пользователя (email)</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <input type="hidden" name="_csrf" value="${_csrf.token}">
                            <button type="submit" class="btn btn-primary">Войти</button>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                        Нет аккаунта? <a href="/registration">Зарегистрироваться</a>
                    </div>
                </div>
            </div>
        </div>
    </block>
    <p></p>
    <#if error??>
        <h2 style="color: red; text-align: center; font-size: 16px;">${error}</h2>
    </#if>
</@t.template>
