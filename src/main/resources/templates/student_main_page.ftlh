<#import "template.ftlh" as t />
<@t.template user>
    <title>Страница студента</title>
    <form method="get" action="/student_page">
        <div>
            <h1>Добро пожаловать, ${user.name}!</h1>
        </div>
    </form>
</@t.template>