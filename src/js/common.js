import * as jq from 'jquery';

// 추후 필요한 method 를 추가하기 위한 오브젝트로 선언
const methods = {
    // 필요한 기능을 작성
    console_log(value) {
        console.log(value)
    },
    stateAni (state) {
        let sectionHome = jq("#info_home");
        let textAni = jq("#fly-in");
        let downAni = jq("#scroll-down");
        let navCheck = jq("#main-navigation-toggle").is(":checked");

        if (state === 'stop') {
            textAni.css('display','none');
            downAni.css('display','none');
        } else if (state === 'run' && navCheck == false) {
            textAni.css('display','block');
            downAni.css('display','block');
        } else if (state === 'checked' && navCheck == false) {
            textAni.css('display','none');
            downAni.css('display','none');
            sectionHome.css('display','contents');
        } else if (state === 'checked' && navCheck == true) {
            textAni.css('display','block');
            downAni.css('display','block');
            sectionHome.css('display','block');
        }
    },
}

// main.js 에서 호출하기 위한 export
export default {
    // install 호출을 위한 함수 작성 (Vue.use() 에서)
    install(Vue) {
        // global method type 으로 정의
        Vue.config.globalProperties.$log = methods.console_log;
        Vue.config.globalProperties.$stateAni = methods.stateAni;
    }
}

