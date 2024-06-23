<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Blogg.</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="https://static.thenounproject.com/png/1022416-200.png" type="image/x-icon">
    @vite('resources/css/app.css')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <style>
        #root {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
        }
    </style>
</head>

<body>
    <div id="root">

    </div>
    @viteReactRefresh
    @vite('resources/js/app.js')

</body>

<script>
    window.env = '{{ env('VITE_API_BASE_URL') }}'
</script>

</html>
