<template>
    <section id="info_site" class="section">
        <div id="section2_layout">
            <div class="contactBox">
                <p class="title_s">
                    <a class="contact_a">Portflio</a>
                </p>
            </div>
            
            <div class="siteBox">
                <div id="slider">
                    <input class="card-slider" type="radio" name="slider" id="s1" checked>
                    <input class="card-slider" type="radio" name="slider" id="s2">
                    <input class="card-slider" type="radio" name="slider" id="s3">
                    <input class="card-slider" type="radio" name="slider" id="s4">
                    <input class="card-slider" type="radio" name="slider" id="s5">
                    <input class="card-slider" type="radio" name="slider" id="s6">
                    <input class="card-slider" type="radio" name="slider" id="s7">

                    <label for="s1" id="slide1" class="card-slider">
                        <div class="site_flex">
                            <div class="oneBox site_img1" alt="무한번역"></div>
                            <div class="twoBox">
                                <div class="pf_title">무한번역</div>
                                <div class="pf_lang">PHP</div>
                                <div class="pf_job">디자인 / 퍼블리싱 / 코딩 </div>
                                <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                                <div class="pf_btn">
                                    <button class="btn">
                                        <a target="_blank" href="http://www.mttrans.co.kr/korean/index.php" alt="무한번역 홈페이지">View Site</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label for="s2" id="slide2" class="card-slider">
                        <div class="oneBox site_img2" alt="서울대 글로벌리더스"></div>
                        <div class="twoBox">
                            <div class="pf_title">GLOBAL LEADERS</div>
                            <div class="pf_lang">PHP</div>
                            <div class="pf_job">퍼블리싱 / 포토샵 / 게시판 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn">
                                <button class="btn">
                                    <a target="_blank" href="http://globalleaders.snu.ac.kr/korean/" alt="서울대 글로벌 리더스 홈페이지">View Site</a>
                                </button>
                            </div>
                        </div>
                    </label>
                    <label for="s3" id="slide3" class="card-slider">
                        <div class="oneBox site_img3" alt="서울대 정치외교학부"></div>
                        <div class="twoBox">
                            <div class="pf_title">서울대 정치외교학부</div>
                            <div class="pf_lang">PHP</div>
                            <div class="pf_job">퍼블리싱 / 포토샵 / 게시판 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn btn_multi">
                                <button class="btn">
                                    <a target="_blank" href="http://polisci.snu.ac.kr/korean/" alt="서울대 정치학 전공 홈페이지">정치학전공</a>
                                </button>
                                <button class="btn">
                                    <a target="_blank" href="http://ir.snu.ac.kr/korean/" alt="서울대 외교학 전공 홈페이지">외교학전공</a>
                                </button>
                                <button class="btn">
                                    <a target="_blank" href="http://psir.snu.ac.kr/korean/" alt="서울대 정치외교 학부 홈페이지">정치외교학부</a>
                                </button>
                            </div>
                        </div>
                    </label>
                    <label for="s4" id="slide4" class="card-slider">
                        <div class="oneBox site_img4" alt="JE Moblie"></div>
                        <div class="twoBox">
                            <div class="pf_title">JE Moblie</div>
                            <div class="pf_lang">PHP</div>
                            <div class="pf_job">디자인 / 퍼블리싱 / 게시판 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn">
                                <button class="btn"><span>사이트 폐쇄</span></button>
                            </div>
                        </div>
                    </label>
                    <label for="s5" id="slide5" class="card-slider">
                        <div class="oneBox site_img5" alt="사랑의 장례"></div>
                        <div class="twoBox">
                            <div class="pf_title">사랑의 장례</div>
                            <div class="pf_lang">PHP</div>
                            <div class="pf_job">기획 / 디자인 / 퍼블리싱 / 코딩 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn">
                                <button class="btn"><span>사이트 폐쇄</span></button>
                            </div>
                        </div>
                    </label>
                    <label for="s6" id="slide6" class="card-slider">
                        <div class="oneBox site_img6" alt="순천향대 컨퍼런스"></div>
                        <div class="twoBox">
                            <div class="pf_title">순천향대 컨퍼런스</div>
                            <div class="pf_lang">PHP</div>
                            <div class="pf_job">퍼블리싱 / 포토샵 / 코딩 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn">
                                <button class="btn"><span>사이트 폐쇄</span></button>
                            </div>
                        </div>
                    </label>
                    <label for="s7" id="slide7" class="card-slider">
                        <div class="oneBox site_img7" alt="PortFlio"></div>
                        <div class="twoBox">
                            <div class="pf_title">PortFlio</div>
                            <div class="pf_lang">VUE</div>
                            <div class="pf_job">기획 / 디자인 / 퍼블리싱 / 코딩 </div>
                            <div class="pf_web">반응형 ( PC / Moblie / Tablet )</div>
                            <div class="pf_btn">
                                <button class="btn">
                                    <a target="_blank" href="https://sun-portflio.netlify.app/" alt="portflio">View Site</a>
                                </button>
                            </div>
                        </div>
                    </label>
                </div> 
            </div>

        </div>
    </section>
</template>

<script>

export default {
    mounted() {

    }
}
</script> 
