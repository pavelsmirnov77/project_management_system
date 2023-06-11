<#import "template.ftlh" as t />
<@t.template user>
    <title>Регистрация</title>
    <link rel= "stylesheet" href="/static/css/styles.css">
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
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="male" value="male" required>
                                    <label class="form-check-label" for="male">Мужской</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="female" value="female" required>
                                    <label class="form-check-label" for="female">Женский</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="dateOfBirth">Дата рождения</label>
                                <input type="dateOfBirth" class="form-control" id="dateOfBirth" name="dateOfBirth" required>
                            </div>
                            <div class="form-group">
                                <label for="phoneNumber">Номер телефона</label>
                                <input type="phoneNumber" class="form-control" id="phoneNumber" name="phoneNumber" required>
                            </div>
                            <div class="form-group">
                                <label for="gender">Роль</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="student" value="student" required>
                                    <label class="form-check-label" for="student">Студент</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="teacher" value="teacher" required>
                                    <label class="form-check-label" for="teacher">Преподаватель</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="description">Подробнее</label>
                                <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Подтвердите пароль</label>
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                            </div>
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
