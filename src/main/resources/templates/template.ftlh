<#macro template user>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/static/css/styles.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <a href="/" class="navbar-brand">Project Controller</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <#if user.email??>
                        <li class="nav-item profile-name">
                            ${user.name}
                            <a href="/profile">
                                <img src="/static/images/default_avatar.png" alt="mdo" width="32" height="32" class="rounded-circle">
                            </a>
                        </li>
                    <#else>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Вход</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/registration">Регистрация</a>
                        </li>
                    </#if>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <#nested/>
            </div>
        </div>
    </div>
    </body>
    </html>
</#macro>