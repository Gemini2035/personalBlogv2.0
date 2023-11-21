import { reactive } from "vue";

/*
 * @Date: 2023-11-20 20:49:00
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 00:56:14
 * @FilePath: /myBlog_versionVue/src/store/studyController.ts
 */
class StudyController {
    private sideNavi = false;
    private menuData: ReadonlyArray<{ title: string, titleEn: string, key: number }> = [
        { title: '\u5168\u90e8\u6587\u7ae0', titleEn: 'All', key: 0 },
        { title: '\u524d\u7aef\u6587\u7ae0', titleEn: 'Frontend', key: 1 },
        { title: '\u0050\u0079\u0074\u0068\u006f\u006e\u6587\u7ae0', titleEn: '', key: 2 },
        { title: '\u0043\u002f\u0043\u0070\u0070\u6587\u7ae0', titleEn: '', key: 3 },
        { title: '\u0053\u0077\u0069\u0066\u0074\u0055\u0049\u6587\u7ae0', titleEn: '', key: 4 },
        { title: '\u5176\u4ed6\u6587\u7ae0', titleEn: 'Others', key: 5 }
    ];
    private menuNum = 0;

    getSideNaviState(): boolean { return this.sideNavi; }
    setSideNaviState(target?: boolean): void {
        if (target === undefined) this.sideNavi = !this.sideNavi;
        else this.sideNavi = target;
    }

    getMenuData(): ReadonlyArray<{ title: string, titleEn: string, key: number }> { return this.menuData; }

    getMenuNum(): number { return this.menuNum; }
    setMenuNum(target: number): void { this.menuNum = target; }
}

export default reactive(new StudyController());