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
                                <label for="username">ФИО пользователя</label>
                                <input type="text" class="form-control" id="username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="gender">Пол</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="male" name="gender" class="custom-control-input" value="male" required>
                                    <label class="custom-control-label" for="male">Мужской</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="female" name="gender" class="custom-control-input" value="female" required>
                                    <label class="custom-control-label" for="female">Женский</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="dateOfBirth">Дата рождения</label>
                                <input type="text" class="form-control" id="dateOfBirth" name="dateOfBirth" required placeholder="дд.мм.гггг">
                            </div>
                            <div class="form-group">
                                <label for="phoneNumber">Номер телефона</label>
                                <input type="phoneNumber" class="form-control" id="phoneNumber" name="phoneNumber" required>
                            </div>
                            <div class="form-group">
                                <label for="gender">Роль</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" type="radio" name="role" id="student" value="student" required>
                                    <label class="custom-control-label" for="student">Студент</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input class="custom-control-input" type="radio" name="role" id="teacher" value="teacher" required>
                                    <label class="custom-control-label" for="teacher">Преподаватель</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="description">Подробная информация</label>
                                <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" name="password" data-toggle="popover" data-trigger="focus" data-placement="right" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Подтвердите пароль</label>
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                            </div>
                            <script src="/static/scripts/registration_scripts.js"></script>
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
    <#if errorMessage??>
        <h2 style="color: red; font-size: 16px;">${errorMessage}</h2>
    </#if>
</@t.template>
