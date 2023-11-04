/*
 * @Date: 2023-11-04 15:02:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-05 03:23:02
 * @FilePath: /MyBlog_vue/src/store/selfIntroController.ts
 */

import { reactive } from "vue";

class SelfIntroController {
    private titleIsVertical = false;
    // private focusList: Array<boolean> = [];

    getTitleIsVertical (): boolean { return this.titleIsVertical; }
    setTitleIsVertical (target?: boolean): void { this.titleIsVertical = target || !this.titleIsVertical; }

    // getFocusState (index: number):boolean { return this.focusList[index]; }
    // setFocusState (index: number, newState?: boolean): void { this.focusList[index] = newState || !this.focusList[index]; }

    resetAll(newState?: SelfIntroController): void { Object.assign(this, newState || new SelfIntroController()); }
}

export default reactive(new SelfIntroController());