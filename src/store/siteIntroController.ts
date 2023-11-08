/*
 * @Date: 2023-11-07 16:33:52
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 13:25:09
 * @FilePath: /MyBlog_vue/src/store/SiteIntroController.ts
 */
import { reactive } from "vue";

class SiteIntroController {
    private globalScrollTop = 0;
    private languageData: ReadonlyArray<{ name: string, persontage: string , tips: string, tipsEn: string }> = [
        { name: 'HTML', persontage: '2.4', tips: '超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。', tipsEn: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
        { name: 'Vue', persontage: '70.1', tips: 'Vue.js（/vjuː/，简称Vue）是一个用于创建用户界面的开源MVVM前端JavaScript框架，也是一个创建单页应用的Web应用框架。Vue.js由尤雨溪创建，由他和其他活跃的核心团队成员维护。', tipsEn: 'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.' },
        { name: 'TypeScript', persontage: '26.8', tips: 'TypeScript是由微软进行开发和维护的一种开源的编程语言。TypeScript是JavaScript的严格语法超集，提供了可选的静态类型检查。', tipsEn: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.' },
        { name: 'CSS', persontage: '0.7', tips: '层叠样式表（英语：Cascading Style Sheets，缩写：CSS；又称串样式列表、级联样式表、串接样式表、阶层式样式表）是一种用来为结构化文档（如HTML文档或XML应用）添加样式（字体、间距和颜色等）的计算机语言', tipsEn: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).' },
    ];

    getGlobalScrollTop (): number { return this.globalScrollTop; }
    setGlobalScrollTop (target: number): void { this.globalScrollTop = target; }
    getLanguageData (): ReadonlyArray<{ name: string, persontage: string , tips: string, tipsEn: string }> { return this.languageData.toSorted((a, b) => { return Number(b.persontage) - Number(a.persontage); }); }
}

export default reactive(new SiteIntroController());