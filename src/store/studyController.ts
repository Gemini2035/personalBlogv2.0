
/*
 * @Date: 2023-11-20 20:49:00
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-25 17:52:21
 * @FilePath: /myBlog_versionVue/src/store/studyController.ts
 */
import { reactive } from "vue";
import QueryInfo from "@/class/query_info";

type EssayMenuType = { [key: string]: string | number, title: string, titleEn: string, pubdate: string, classify: 0, id: string };

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
    private showMoreResult = false;
    private queryInfo = new QueryInfo();

    constructor() {
        this.isLoading = true;
        this.getPassageMenu()
            .then(result => {
                this.passageMenu = result;
                this.setSearchResult();
            })
            .finally(() => this.isLoading = false)
    }

    getIsLoading(): boolean { return this.isLoading; }
    setIsLoading(target?: boolean): void {
        if (target === undefined) this.isLoading = !this.isLoading;
        else this.isLoading = target;
    }

    getQueryData(): QueryInfo { return this.queryInfo; }
    setQueryData(page?: number, size?: number): void {
        Object.assign(this.queryInfo, new QueryInfo(
            page === undefined ? this.queryInfo.page + 1 : page,
            size === undefined ? this.queryInfo.size : size
        ))
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

    getShowMoreResult(): boolean { return this.showMoreResult; }

    getSearchResult(): Array<EssayMenuType> { return this.searchResult; }
    setSearchResult(keyWord?: string): void {
        const resultLength = 5;
        this.searchResult.length = 0;
        this.showMoreResult = false;
        let result: Array<EssayMenuType> = [];
        if (keyWord) {
            result = this.passageMenu.filter(item => {
                for (const key of Object.keys(item)) {
                    try {
                        return new RegExp(keyWord, 'i').test(item[key] as string);
                    } catch { continue; }
                }
            });
            this.searchResult = result.slice(0, resultLength);
        } else result = this.passageMenu;
        if (result.length < resultLength) return;
        this.showMoreResult = true;
        while (this.searchResult.length < resultLength) {
            const eassayInfo: EssayMenuType = result[Math.floor(Math.random() * result.length)];
            if (this.searchResult.indexOf(eassayInfo) !== -1) continue;
            this.searchResult.push(eassayInfo);
        }
    }

    async getPassageMenu(): Promise<Array<EssayMenuType>> {
        if (this.passageMenu.length) return Promise.resolve(this.passageMenu);
        try {
            const jsonData = await fetch('./src/data/essayMenu.json');
            const resultArray = await jsonData.json();
            this.isLoading = false;
            return Promise.resolve(resultArray);
        } catch {
            return Promise.reject([]);
        }
    }
}

export default reactive(new StudyController());