<template>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <Home/>
        <Skill/>
        <WebSite/>
        <Phone/>
    </body>
</html>
</template>

<script>
import Home from './components/my_home.vue';
import Skill from './components/my_skill.vue';
import WebSite from './components/my_site.vue';
import Phone from './components/my_phone.vue';

export default {
    name: 'App',
    components: {
        Home, Skill, WebSite, Phone
    }
}
</script>

<style lang="scss">

</style>
