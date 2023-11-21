/*
 * @Date: 2023-11-07 16:33:52
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-21 18:50:03
 * @FilePath: /myBlog_versionVue/src/store/siteIntroController.ts
 */
import { reactive } from "vue";

class SiteIntroController {
    private globalScrollTop = 0;
    private languageData = [
        { name: 'HTML', percentage: '2.4', key: 0 },
        { name: 'Vue', percentage: '70.1', key: 1 },
        { name: 'TypeScript', percentage: '26.8', key: 2 },
        { name: 'CSS', percentage: '0.7', key: 3 },
    ];
    private tipsList = [
        { key: 0, tipsEn: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
        { key: 1, tipsEn: 'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.' },
        { key: 2, tipsEn: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.' },
        { key: 3, tipsEn: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).' }
    ];
    private timeLineList: Array<{ time: string, status: 'done' | 'dealing' | 'future', content: string, contentEn: string }> = [
        { time: 'March 20,2023', status: 'done', content: '\u65b0\u5efa\u6587\u4ef6\u5939', contentEn: 'Create the new folder' },
        { time: 'May 29,2023', status: 'done', content: '\u521d\u7248\u535a\u5ba2\u4e0a\u7ebf', contentEn: 'Initial blog launch' },
        { time: 'May 30,2023', status: 'done', content: '\u7b2c\u4e00\u7bc7\u535a\u5ba2\u6587\u7ae0\u53d1\u5e03\uff0c\u0043\u0073\u0073\u968f\u8bb0', contentEn: 'The first blog article was published as Css Notes' },
        { time: 'October 27,2023', status: 'done', content: '\u9879\u76ee\u5411\u0056\u0075\u0065\u0033\u8f6c\u79fb', contentEn: 'Project transfer to Vue3.js' },
        { time: 'November 15,2023', status: 'dealing', content: '\u4f7f\u7528\u004e\u006f\u0064\u0065\u002e\u006a\u0073\u4e3a\u4e2a\u4eba\u535a\u5ba2\u642d\u5efa\u540e\u7aef', contentEn: 'Building a backend for personal blogs using Node.js' },
        { time: 'November 29,2023', status: 'dealing', content: '\u4e2a\u4eba\u535a\u5ba2\u540e\u7aef\u642d\u5efa\u5b8c\u6210', contentEn: 'Personal blog backend setup completed' },
        { time: 'November 30,2023', status: 'future', content: '\u7b2c\u4e8c\u7248\u535a\u5ba2\u4e0a\u7ebf', contentEn: 'The second version of the blog was launched' },
        { time: 'December 1,2023', status: 'future', content: '\u7b2c\u4e8c\u7248\u7b2c\u4e00\u7bc7\u535a\u5ba2\u6587\u7ae0\u53d1\u5e03\uff0c\u0054\u0073\u72ec\u7279\u7c7b\u578b', contentEn: 'The first blog article in the second edition was published titled Unique Types of Ts' },
        { time: 'Later in 2023', status: 'future', content: '\u4e30\u5bcc\u7ad9\u70b9\u56fe\u7247\u5e93\uff0c\u6301\u7eed\u4f18\u5316\u0055\u0049', contentEn: 'Rich website image library, continuously optimizing UI' },
        { time: '2024', status: 'future', content: '\u4e3a\u7ad9\u70b9\u63a5\u5165\u004f\u0070\u0065\u006e\u0041\u0069', contentEn: 'Connect the site to OpenAi' }
    ];
    private buildToolList: Array<{ imgUrl: string, name: string, href: string }> = [
        { imgUrl: 'src/assets/site/viteLogo.svg', name: 'Vite', href: 'https://vitejs.dev/' },
        { imgUrl: 'src/assets/site/vue3Logo.svg', name: 'Vue3', href: 'https://vuejs.org/' },
        { imgUrl: 'src/assets/site/typeScriptLogo.svg', name: 'TypeScript', href: 'https://www.typescriptlang.org/' }
    ];
    private aidList: Array< { imgUrl: string, title: string, content: string, href: string }> = [
        { imgUrl: 'src/assets/self/github.svg', title: 'GitHub', content: '提供代码托管服务', href: 'https://github.com/' },
        { imgUrl: 'src/assets/site/gptLogo.svg', title: 'ChatGPT', content: '部分代码咨询与参考', href: 'https://chat.openai.com/' },
        { imgUrl: 'src/assets/site/vscodeLogo.svg', title: 'VS Code', content: '代码编辑器及相关调试(插件)', href: 'https://code.visualstudio.com/' },
        { imgUrl: 'src/assets/site/nasaLogo.svg', title: 'NASA', content: '提供网站背景图片', href: 'https://www.nasa.gov/' },
        { imgUrl: 'src/assets/site/appleLogo.svg', title: 'Apple', content: '提供开发硬件支持', href: 'https://www.apple.com/' },
        { imgUrl: 'src/assets/site/wikiLogo.svg', title: '维基百科', content: '提供词条解释', href: 'https://www.wikipedia.org/' }
    ];
    private contributorList: Array<{ avatar: string, percentage: string, nickName: string, href: string }> = [
        { avatar: 'https://avatars.githubusercontent.com/u/76091679?v=4', nickName: 'Gemini2035', percentage: '100%', href: 'https://github.com/Gemini2035' }
    ];
    getGlobalScrollTop (): number { return this.globalScrollTop; }
    setGlobalScrollTop (target: number): void { this.globalScrollTop = target; }
    getLanguageData (): Array<{ name: string, percentage: string, key: number }> { return this.languageData.toSorted((a, b) => { return Number(b.percentage) - Number(a.percentage); }); }
    getTipsList (): Array<{ tipsEn: string, key: number }> { return this.tipsList }
    getTimeLineList (): Array<{ time: string, status: 'done' | 'dealing' | 'future', content: string, contentEn: string }> { return this.timeLineList; }
    getTimeLinePercentage (): Array<number> {
        const total: number = this.timeLineList.length;
        return [
            Math.floor(this.timeLineList.filter(item => item.status === 'done').length / total * 100),
            Math.floor(this.timeLineList.filter(item => item.status === 'dealing').length / total * 100),
            Math.floor(this.timeLineList.filter(item => item.status === 'future').length / total * 100),
        ];
    }
    getBuildToolList (): Array<{ imgUrl: string, name: string, href: string }> { return this.buildToolList; }
    getAidList (): Array<{ imgUrl: string, title: string, content: string, href: string }> { return this.aidList; }
    getContributorList (): Array<{ avatar: string, percentage: string, nickName: string, href: string }> { return this.contributorList; }
    getContributorNameString (): string { return this.contributorList.map(item => item.nickName).join(''); }
}

export default reactive(new SiteIntroController());