/*
 * @Date: 2023-11-07 16:33:52
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 17:54:28
 * @FilePath: /myBlog_versionVue/src/store/siteIntroController.ts
 */
import { reactive } from "vue";

class SiteIntroController {
    private globalScrollTop = 0;
    private languageData: ReadonlyArray<{ name: string, persontage: string, key: number }> = [
        { name: 'HTML', persontage: '2.4', key: 0 },
        { name: 'Vue', persontage: '70.1', key: 1 },
        { name: 'TypeScript', persontage: '26.8', key: 2 },
        { name: 'CSS', persontage: '0.7', key: 3 },
    ];
    private tipsList: ReadonlyArray<{ tipsEn: string, key: number }> = [
        { key: 0, tipsEn: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
        { key: 1, tipsEn: 'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.' },
        { key: 2, tipsEn: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.' },
        { key: 3, tipsEn: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).' }
    ]

    getGlobalScrollTop (): number { return this.globalScrollTop; }
    setGlobalScrollTop (target: number): void { this.globalScrollTop = target; }
    getLanguageData (): ReadonlyArray<{ name: string, persontage: string , key: number }> { return this.languageData.toSorted((a, b) => { return Number(b.persontage) - Number(a.persontage); }); }
    getTipsList (): ReadonlyArray<{ tipsEn: string, key: number }> { return this.tipsList };
}

export default reactive(new SiteIntroController());