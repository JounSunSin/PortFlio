<template>
    <section id="routers">
        <router-view>
            <Nav/>
            <Home/>
            <Skill/>
            <WebSite/>
            <Phone/>
        </router-view>
    </section>
</template>

<script>
import Nav from './components/my_nav.vue';
import Home from './components/my_home.vue';
import Skill from './components/my_skill.vue';
import WebSite from './components/my_site.vue';
import Phone from './components/my_phone.vue';

export default {
    name: 'App',
    components: {
        Home, Skill, WebSite, Phone, Nav
    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style scoped>
@import "./styles/main.css";
</style>