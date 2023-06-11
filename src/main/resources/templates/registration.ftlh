<#import "template.ftlh" as t />
<@t.template user!>
    <link rel= "stylesheet" href="/static/css/styles.css">
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Регистрация</h2>
            </div>
            <div class="card-body">
                <form action="/registration" method="post">
                    <p>Выберите вашу роль:</p>
                    <div class="button-group">
                        <a href="/student_registration" class="btn btn-primary">Студент</a>
                        <a href="/teacher_registration" class="btn btn-primary">Преподаватель</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</@t.template>