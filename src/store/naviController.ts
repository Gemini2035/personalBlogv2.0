/*
 * @Date: 2023-10-29 20:20:01
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 22:51:40
 * @FilePath: /myBlog_versionVue/src/store/naviController.ts
 */
import { reactive } from 'vue';
import router from '../routes';
import { RouteRecordRaw } from 'vue-router';
import SelfIntroController from './selfIntroController';

class NaviController {
    private pageNum = 4; // 0:welcome页面、1:导航界面、2:自我介绍、3:站点介绍、4:学习记录
    private naviState = false;
    private bgcolor = 'rgba(255, 255, 255, 1)';
    private fcolor = 'rgba(0, 0, 0, 0.9)';
    private nowTime = '';
    private colorList: ReadonlyArray<{ bgc: string, fc: string }> = [
        { bgc: 'rgba(255, 20, 147, 1)', fc: 'rgba(255, 255, 255, 0.9)' },
        { bgc: 'rgba(255, 182, 193, 1)', fc: 'rgba(0, 0, 0, 0.7)' },
        { bgc: 'rgba(220, 20, 60, 1)', fc: 'rgba(255, 255, 255, 0.9)' },
        { bgc: 'rgba(255, 69, 0, 1)', fc: 'rgba(255, 255, 255, 0.9)' },
        { bgc: 'rgba(240, 230, 140, 1)', fc: 'rgba(0, 0, 0, 0.7)' },
        { bgc: 'rgba(255, 239, 213, 1)', fc: 'rgba(0, 0, 0, 0.7)' },
        { bgc: 'rgba(0, 100, 0, 1)', fc: 'rgba(255, 255, 255, 0.9)' },
        { bgc: 'rgba(152, 251, 152, 1)', fc: 'rgba(0, 0, 0, 0.7)' },
        { bgc: 'rgba(240, 248, 255, 1)', fc: 'rgba(0, 0, 0, 0.7)' },
        { bgc: 'rgba(244, 255, 255, 1)', fc: 'rgba(0, 0, 0, 0.7)' }
    ];
    private childrenRoutes: RouteRecordRaw[] = router.getRoutes().filter(item => item.name === 'home').at(0)!.children;


    constructor() {
        this.colorPicker();
        this.setTime();
    }

    getTime (): string { return this.nowTime; }
    setTime (): void {
        const stringFormate = (char: number) => { return `${char < 10 ? '0' : ''}${char}`; }
        var date = new Date();
        const time = `${date.getFullYear()}-${stringFormate(date.getMonth() + 1)}-${stringFormate(date.getDate())} ${stringFormate(date.getHours())}:${stringFormate(date.getMinutes())}:${stringFormate(date.getSeconds())}`;
        this.nowTime = time;
    }

    getPageNum (): number { return this.pageNum; }
    setPageNum (target: number): void {
        this.pageNum = target;
        // 当返回自我介绍时重置状态
        if (target === 2) SelfIntroController.resetAll();
        router.push({ name: this.childrenRoutes.at(target - 1)!.name });
    }

    getNaviState (): boolean { return this.naviState; }
    setNaviState (target?: boolean): void {
        if (target === undefined) this.naviState = !this.naviState;
        else this.naviState = target;
    }

    getBgColor (): string { return this.bgcolor; }
    getFColor (): string { return this.fcolor; }
    colorPicker (): void {
        const oldColor: string = this.bgcolor;
        let { bgc, fc } = { bgc: '', fc: '' };
        do ({ bgc, fc } = (this.colorList[Math.floor(Math.random() * this.colorList.length)]))
        while (bgc === oldColor);
        this.bgcolor = bgc;
        this.fcolor = fc;
    }

    getHomeChildRoutes(): RouteRecordRaw[] { return this.childrenRoutes; }

    isActive(target: number): boolean { return this.pageNum === target; }
}

export default reactive(new NaviController());