/*
 * @Date: 2023-11-04 15:02:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-04 17:23:28
 * @FilePath: /MyBlog_vue/src/store/selfIntroController.ts
 */

import { reactive } from "vue";

class SelfIntroController {
    private titleIsVertical = false;

    getTitleIsVertical(): boolean { return this.titleIsVertical; }
    setTitleIsVertical(target?: boolean): void {
        if (target) this.titleIsVertical = target;
        else this.titleIsVertical = !this.titleIsVertical; 
    }
    resetState(newState?: SelfIntroController): void {
        if (newState) Object.assign(this, newState)
        else Object.assign(this, new SelfIntroController());
    }
}

export default reactive(new SelfIntroController());