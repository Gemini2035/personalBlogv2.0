import { reactive } from "vue";

/*
 * @Date: 2023-11-20 20:49:00
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-25 17:52:21
 * @FilePath: /myBlog_versionVue/src/store/studyController.ts
 */

type EssayMenuType = { title: string, titleEn: string, pubdate: string, classify: 0, id: string };
class StudyController {
    private sideNavi = true;
    private searchState = false;
    private menuData: ReadonlyArray<{ title: string, titleEn: string, key: number }> = [
        { title: '\u5168\u90e8\u6587\u7ae0', titleEn: 'All', key: -1 },
        { title: '\u524d\u7aef\u6587\u7ae0', titleEn: 'Frontend', key: 0 },
        { title: '\u0050\u0079\u0074\u0068\u006f\u006e\u6587\u7ae0', titleEn: '', key: 1 },
        { title: '\u0043\u002f\u0043\u0070\u0070\u6587\u7ae0', titleEn: '', key: 2 },
        { title: '\u0053\u0077\u0069\u0066\u0074\u0055\u0049\u6587\u7ae0', titleEn: '', key: 3 },
        { title: '\u5176\u4ed6\u6587\u7ae0', titleEn: 'Others', key: 4 }
    ];
    private searchResult: Array<EssayMenuType> = [];
    private passageMenu: Array<EssayMenuType> = [];
    private menuNum = -1; // 依视图送上到下分别为-1 0 1 2 3 4
    private isLoading = false;
    private isSearching = false;

    constructor() {
        fetch('./src/data/essayMenu.json')
            .then(result => {
                console.log('111')
                this.isLoading = true;
                result.json()
                .then((menuData: Array<EssayMenuType>) => {
                    this.passageMenu = menuData;
                    this.isLoading = false;
                    while (this.searchResult.length < 5) {
                        const essayRecommend: EssayMenuType = this.passageMenu[Math.floor(Math.random() * this.passageMenu.length)];
                        if (this.searchResult.indexOf(essayRecommend) !== -1) continue;
                        this.searchResult.push(essayRecommend);
                    }
                })
            })
            .catch(() => {
                this.isLoading = false;
                this.isSearching = false;
                this.searchResult.length = 0;
            })
    }

    getSideNaviState(): boolean { return this.sideNavi; }
    setSideNaviState(target?: boolean): void {
        if (target === undefined) this.sideNavi = !this.sideNavi;
        else this.sideNavi = target;
    }

    getMenuData(): ReadonlyArray<{ title: string, titleEn: string, key: number }> { return this.menuData; }

    getMenuNum(): number { return this.menuNum; }
    setMenuNum(target: number): void { this.menuNum = target; }

    getSearchState(): boolean { return this.searchState; }
    setSearchState(target?: boolean): void {
        if (target === undefined) this.searchState = !this.searchState;
        else this.searchState = target;
    }

    getSearchResult(): Array<EssayMenuType> { return this.searchResult; }

    getPassageMenu(): Array<EssayMenuType> { return this.passageMenu; }
}

export default reactive(new StudyController());