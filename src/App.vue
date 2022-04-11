<template>
    <Home/>
    <Skill/>
    <WebSite/>
    <Phone/>
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
<style>

</style>