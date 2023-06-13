<#import "template.ftlh" as t />
<@t.template user>
    <title>Авторизация</title>
    <link rel="stylesheet" type="text/css" href="/static/css/styles.css">
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
                                <label for="username">Имя пользователя</label>
                                <input type="text" class="form-control" id="username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Войти</button>
                        </form>
                    </div>
                    <input type="hidden" name="_csrf" value="${_csrf.token}">
                    <div class="card-footer text-muted">
                        Нет аккаунта? <a href="/registration">Зарегистрироваться</a>
                    </div>
                </div>
            </div>
        </div>
    </block>
    <#if errorMessage??>
        <h2 style="color: red; font-size: 16px;">${error}</h2>
    </#if>
</@t.template>
