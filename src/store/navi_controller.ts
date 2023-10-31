/*
 * @Date: 2023-10-29 20:20:01
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-31 15:32:05
 * @FilePath: /MyBlog_vue/src/store/navi_controller.ts
 */
import { reactive } from 'vue';

// 颜色列表
const colorList: ReadonlyArray<{ bgc: string, fc: string }> = [
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

class NAVICONTROLLER {
    private pageNum = 1;
    private naviState = false;
    private bgcolor = 'rgba(255, 255, 255, 1)';
    private fcolor ='rgba(0, 0, 0, 0.9)';

    constructor () {
        this.colorPicker();
    }

    getPageNum(): number { return this.pageNum; }
    setPageNum(target: number): void { this.pageNum = target; }

    getNaviState(): boolean { return this.naviState; }
    setNaviState(target?: boolean): void { 
        if (target) this.naviState = target;
        else this.naviState = !this.naviState;
    }

    getBgColor(): string { return this.bgcolor; }
    getFColor(): string { return this.fcolor; } 
    colorPicker(): void {
        const oldColor: string = this.bgcolor;
        let { bgc, fc } = { bgc: '', fc: '' };
        do ({ bgc, fc } = (colorList[Math.floor(Math.random() * colorList.length)]))
        while (bgc === oldColor);
        this.bgcolor = bgc;
        this.fcolor = fc;
    }

    isActive(target: number): boolean { return this.pageNum === target; }
}

const NaviController = reactive(new NAVICONTROLLER());


export default NaviController;