<template>
    <section>
        <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"/>
        <label for="main-navigation-toggle" @click="stateAni('checked')">
            <span></span>
        </label>

        <nav id="main-navigation" class="nav-main">
            <ul class="menu">
                <li class="menu__item">
                    <a class="menu__link" href="#0">Home</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#0">Skill</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#0">Portfolio</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#0">Phone</a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
import * as $ from 'jquery';

export default {
    data () {
        return {
            scroll_num : 0
        }
    },
    mounted () {
        let test = $('#test').text();
        console.log(test);
        window.addEventListener('scroll', () => {
            this.scroll_num = window.scrollY;
            console.log(window.scrollY);
            if (this.scroll_num > 300) {
                this.stateAni("stop");
            } else {
                this.stateAni("run");
            }
        });
    },
    methods: {
        stateAni (state) {
            let sectionHome = $("#info_home");
            let textAni = $("#fly-in");
            let downAni = $("#scroll-down");
            let navCheck = $("#main-navigation-toggle").is(":checked");
            console.log(state);
            console.log(navCheck);
            
            if (state === "stop") {
                textAni.css('display','none');
                downAni.css('display','none');
            } else {
                textAni.css('display','block');
                downAni.css('display','block');
            }

            if(state === "checked" && navCheck === false) {
                textAni.css('display','none');
                downAni.css('display','none');
                sectionHome.css('opacity',0);
                sectionHome.css('transition','all 0.4s');                
            } else {
                textAni.css('display','block');
                downAni.css('display','block');
                sectionHome.css('opacity',0.8);                
                sectionHome.css('transition','all 0s');                
            }
        },
    },
    destoryed() {
        this.stateAni("run");
    }
}
</script>

<style lang="scss">
@import "../styles/main.css";

</style>
