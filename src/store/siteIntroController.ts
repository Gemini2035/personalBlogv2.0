/*
 * @Date: 2023-11-07 16:33:52
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-10 18:54:17
 * @FilePath: /myBlog_versionVue/src/store/siteIntroController.ts
 */
import { reactive } from "vue";

class SiteIntroController {
    private globalScrollTop = 0;
    private languageData = [
        { name: 'HTML', persontage: '2.4', key: 0 },
        { name: 'Vue', persontage: '70.1', key: 1 },
        { name: 'TypeScript', persontage: '26.8', key: 2 },
        { name: 'CSS', persontage: '0.7', key: 3 },
    ];
    private tipsList = [
        { key: 0, tipsEn: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
        { key: 1, tipsEn: 'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.' },
        { key: 2, tipsEn: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.' },
        { key: 3, tipsEn: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).' }
    ];
    private timeLineList: Array<{ time: string, status: 'done' | 'dealing' | 'future', content: string, contentEn: string }> = [
        { time: '2023.03.20', status: 'done', content: '新建文件夹', contentEn: 'Create the new folder' },
        { time: '2023.05.29', status: 'done', content: '初版博客上线', contentEn: 'Initial blog launch' },
        { time: '2023.05.30', status: 'done', content: '第一篇博客文章发布，Css随记', contentEn: 'The first blog article was published as Css Notes' },
        { time: '2023.10.27', status: 'done', content: '项目向Vue3转移', contentEn: 'Project transfer to Vue3.js' },
        { time: '2023.10.15', status: 'dealing', content: '使用Node.js为个人博客搭建后端', contentEn: 'Building a backend for personal blogs using Node.js' },
        { time: '2023.11.29', status: 'dealing', content: '个人博客后端搭建完成', contentEn: 'Personal blog backend setup completed' },
        { time: '2023.11.30', status: 'future', content: '第二版博客上线', contentEn: 'The second version of the blog was launched' },
        { time: '2023.12.01', status: 'future', content: '第二版第一篇博客文章发布，Ts独特类型', contentEn: 'The first blog article in the second edition was published titled Unique Types of Ts' },
        { time: '2023', status: 'future', content: '丰富站点图片库，持续优化UI', contentEn: 'Rich website image library, continuously optimizing UI' },
        { time: '2024', status: 'future', content: '为站点接入OpenAi', contentEn: 'Connect the site to OpenAi' }
    ];
    private buildToolList: Array<{ imgUrl: string, name: string, href: string }> = [
        { imgUrl: 'src/assets/site/viteLogo.svg', name: 'Vite', href: 'https://vitejs.dev/' },
        { imgUrl: 'src/assets/site/vue3Logo.svg', name: 'Vue3', href: 'https://vuejs.org/' },
        { imgUrl: 'src/assets/site/typeScriptLogo.svg', name: 'TypeScript', href: 'https://www.typescriptlang.org/' }
    ]

    getGlobalScrollTop (): number { return this.globalScrollTop; }
    setGlobalScrollTop (target: number): void { this.globalScrollTop = target; }

    getLanguageData (): Array<{ name: string, persontage: string, key: number }> { return this.languageData.toSorted((a, b) => { return Number(b.persontage) - Number(a.persontage); }); }
    getTipsList (): Array<{ tipsEn: string, key: number }> { return this.tipsList }
    getTimeLineList (): Array<{ time: string, status: 'done' | 'dealing' | 'future', content: string, contentEn: string }> { return this.timeLineList; }
    getBuildToolList (): Array<{ imgUrl: string, name: string, href: string }> { return this.buildToolList; }
}

export default reactive(new SiteIntroController());