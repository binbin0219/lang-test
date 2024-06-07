<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="project-dashboard" style="display: flex; flex-direction: column; row-gap: 20px;">
        <h1 data-i18n="DashboardTitle" data-ns="project-dashboard"></h1>
        <h1 data-i18n="ForecastTitle" data-ns="project-dashboard"></h1>
        <h1 data-i18n="ForecastNearestStation" data-ns="project-dashboard"></h1>
        <h1 data-i18n="ForecastTemperature" data-ns="project-dashboard"></h1>
        <h1 data-i18n="Month" data-ns="project-dashboard" data-param-count= '5'></h1>
        <h1 data-i18n="TimelineMarkedAsCompleted" data-ns="project-dashboard" data-param-task='WHAT'></h1>
    </div>
    <h1 data-i18n="Title" data-ns="project-menu"></h1>
    <select id="language-selector">
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="my">Malay</option>
    </select>
    @vite('resources/js/app.js')
</body>
</html>