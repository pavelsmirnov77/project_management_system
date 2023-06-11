<#import "template.ftlh" as t />
<@t.template user!>
    <title>Добро пожаловать!</title>
    <link rel="stylesheet" href="/static/css/styles.css">
    <form method="get" action="/">
        <block>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h5 class="card-title">Добро пожаловать на наш сайт!</h5>
                        </div>
                        <div class="card-body">
                            <p>Мы предоставляем возможность управлять учебными проектами. Здесь вы можете создавать, редактировать и отслеживать свои проекты, делиться информацией с другими участниками и многое другое.</p>
                            <p>Если у вас еще нет аккаунта, вы можете <a href="/registration">зарегистрироваться</a> и начать использовать наш сервис.</p>
                        </div>
                        <div class="card-footer text-muted">
                            <p>Для доступа ко всем функциям сайта, пожалуйста, <a href="/login">авторизуйтесь</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </block>
    </form>
</@t.template>
