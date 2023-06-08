<#import "template.ftlh" as t />
<@t.template user>

    <block>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mt-5">
                    <div class="card-header">
                        <h5 class="card-title">Регистрация</h5>
                    </div>
                    <div class="card-body">
                        <form action="/register" method="post">
                            <div class="form-group">
                                <label for="username">Имя пользователя</label>
                                <input type="text" class="form-control" id="username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Номер телефона</label>
                                <input type="password" class="form-control" id="phoneNumber" name="phoneNumber" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Подтвердите пароль</label>
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </block>
    <#if errorMessage??>
        <h2 style="color: red; font-size: 16px;">${errorMessage}</h2>
    </#if>

</@t.template>
