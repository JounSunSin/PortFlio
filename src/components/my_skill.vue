<template>
    <section id="info_skill" class="section">
        <div class="img_padding"></div>
        <div id="skillBox">
            <div class="skill_item" data-aos="fade-down-right"></div>
            <div class="skill_item" data-aos="fade-down"></div>
            <div class="skill_item" data-aos="fade-down-left"></div>
            <div class="skill_item" data-aos="flip-up"></div>
            <div class="skill_item" data-aos="flip-up"></div>
            <div class="skill_item" data-aos="flip-up"></div>
            <div class="skill_item" data-aos="fade-up-right" data-aos-anchor-placement="top"></div>
            <div class="skill_item" data-aos="fade-up" data-aos-anchor-placement="top"></div>
            <div class="skill_item" data-aos="fade-up-left" data-aos-anchor-placement="top"></div>
        </div>
    </section>
</template>

<script>
export default {
    mounted () {
        this.$startAos();
    },    
}
</script>
