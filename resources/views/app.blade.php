<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel React</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.css')
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
