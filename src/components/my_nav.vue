<template>
    <section>
        <input type="checkbox" id="main-navigation-toggle" class="btn btn--close" title="Toggle main navigation"/>
        <label for="main-navigation-toggle" @click="$stateAni('checked')">
            <span></span>
        </label>

        <nav id="main-navigation" class="nav-main">
            <ul class="menu">
                <li class="menu__item">
                    <a class="menu__link" @click="$stateAni('move1')" href="#info_home" >HOME</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" @click="$stateAni('move2')" href="#info_skill" >SKILL</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" @click="$stateAni('move3')" href="#info_site" >SITE</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" @click="$stateAni('move4')" href="#info_phone" >PHONE</a>
                </li>
            </ul>
        </nav>
    </section> 
</template>

<script> 

export default {
    data () {
        return {
            scroll_num : 0
        }
    },
    mounted () {
        window.addEventListener('scroll', () => {
            this.scroll_num = window.scrollY;

            if (this.scroll_num >= 650) {
                this.$stateAni("stop");
            } else {
                this.$stateAni("run");
            }
        }); 

        this.$backCover();
    },
}
</script>

