<template>
    <section id="info_phone" class="section">
        <div id="section4_layout">
            <div class="center_layout">
                <div class="message">
                    <div class="contactBox">
                        <p class="title_p">
                            <a class="contact_a">CONTACT</a>
                        </p>
                    </div>
                    <div class="textBox">
                        <p class="end_ment_1"></p>
                        <p class="end_ment_2"></p>
                        <p class="end_ment_3"></p>
                        <p class="end_ment_4"></p>
                        <p class="end_ment_5"></p>
                    </div>
                </div>

                <div class="phoneBox">
                    <div class="selfBox self_address">
                        <div class="self_img_map" alt="map"></div>
                        <div class="self_text">경기도 고양시 화정역</div>
                    </div>
                    <div class="selfBox self_email">
                        <div class="self_img_email" alt="email"></div>
                        <div class="self_text">bluesky0180@naver.com</div>
                    </div>
                    <div class="selfBox self_phone">
                        <div class="self_img_phone" alt="phone"></div>
                        <div class="self_text">010 - 2907 - 0180</div>
                    </div>
                </div>           
            </div>

            <div id="footerDiv">
                <div>
                    <a class="self_img_git" href="https://github.com/JounSunSin?tab=repositories"
                    target="_blank" alt="GitHub"></a>
                    <div>&copy; 2022 Web Front-end developer by jong sun Shin</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    mounted () {
        this.$typingMsg();
    }
}
</script>
