<template>
    <section id="info_skill">
        <div class="img_padding"></div>
        <div id="skillBox">
            <div class="skill_item skill_1" data-aos="fade-down-right"></div>
            <div class="skill_item skill_2" data-aos="fade-down"></div>
            <div class="skill_item skill_3" data-aos="fade-down-left"></div>
            <div class="skill_item skill_4" data-aos="flip-up"></div>
            <div class="skill_item skill_none"></div>
            <div class="skill_item skill_5" data-aos="flip-up"></div>
            <div class="skill_item skill_6" data-aos="fade-up-right" data-aos-anchor-placement="top"></div>
            <div class="skill_item skill_7" data-aos="fade-up" data-aos-anchor-placement="top"></div>
            <div class="skill_item skill_8" data-aos="fade-up-left" data-aos-anchor-placement="top"></div>
        </div>
    </section>
</template>

<script>
import AOS from 'aos';

export default {
    mounted () {
        AOS.init({
            duration: 1500,
            delay: 1000,
            easing: 'linear',
            offset: 500,
        });
    },    
}
</script>
