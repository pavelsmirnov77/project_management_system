<#import "template.ftlh" as t />
<@t.template user>
    <title>Регистрация</title>
    <link rel= "stylesheet" href="/static/css/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <block>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mt-5">
                    <div class="card-header">
                        <h5 class="card-title">Регистрация</h5>
                    </div>
                    <div class="card-body">
                        <form action="/registration" method="post">
                            <div class="form-group">
                                <label for="name">ФИО пользователя</label>
                                <input type="text" class="form-control" id="name" required name="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" required name="email">
                            </div>
                            <div class="form-group">
                                <label for="gender">Пол</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="male" class="custom-control-input" value="male" required name="gender">
                                    <label class="custom-control-label" for="male">Мужской</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="female" class="custom-control-input" value="female" required name="gender">
                                    <label class="custom-control-label" for="female">Женский</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="dateOfBirth">Дата рождения</label>
                                <input type="text" class="form-control" id="dateOfBirth" required name="dateOfBirth" placeholder="гггг-мм-дд">
                            </div>
                            <div class="form-group">
                                <label for="phoneNumber">Номер телефона</label>
                                <input type="text" class="form-control" id="phoneNumber" required name="phoneNumber">
                            </div>
                            <div class="form-group">
                                <label for="gender">Роль</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" type="radio" id="student" value="student" required name="roleUser">
                                    <label class="custom-control-label" for="student">Студент</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" type="radio" id="teacher" value="teacher" required name="roleUser">
                                    <label class="custom-control-label" for="teacher">Преподаватель</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="description">Подробная информация</label>
                                <textarea class="form-control" id="description" rows="4" required name="description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" data-toggle="popover" data-trigger="focus" data-placement="right" required name="password">
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Подтвердите пароль</label>
                                <input type="password" class="form-control" id="confirmPassword" required name="confirmPassword">
                            </div>
                            <script src="/static/scripts/registration_scripts.js"></script>
                            <input type="hidden" name="_csrf" value="${_csrf.token}">
                            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                        Уже зарегистрированы? <a href="/login">Войти</a>
                    </div>
                </div>
            </div>
        </div>
    </block>
    <p></p>
    <#if errorMessage??>
        <h2 style="color: red; text-align: center; font-size: 16px;">${errorMessage}</h2>
    </#if>
</@t.template>
