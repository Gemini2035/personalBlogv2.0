/*
 * @Date: 2023-11-04 15:02:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-05 17:21:42
 * @FilePath: /MyBlog_vue/src/store/selfIntroController.ts
 */

import { reactive } from "vue";

class SelfIntroController {
    private titleIsVertical = false;
    private scrollTop = 0;
    private infoList: ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> = [
        { title: '名称', titleEn: 'Name', content: '5f205fd76d0b', key: 0 },
        { title: '性别', titleEn: 'Sex', content: '男', key: 1 },
        { title: '年龄', titleEn: 'Age', content: '21', key: 2 },
        { title: '居住地', titleEn: 'Location', content: '成都 四川 中国', key: 3 },
        { title: '关键字', titleEn: 'KeyWord', content: '技术爱好者、瞎折腾、懒病患者、无上午组织、夜行性、番剧 ...', key: 4 },
    ];

    getTitleIsVertical (): boolean { return this.titleIsVertical; }
    setTitleIsVertical (target?: boolean): void { this.titleIsVertical = target || !this.titleIsVertical; }

    getscrollTop (): number { return this.scrollTop; }
    setScrollTop (target: number): void { this.scrollTop = target; }

    getinfoList (): ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> { return this.infoList; }

    resetAll(newState?: SelfIntroController): void { Object.assign(this, newState || new SelfIntroController()); }
}

export default reactive(new SelfIntroController());