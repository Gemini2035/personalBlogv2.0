/*
 * @Date: 2023-10-31 15:09:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-21 17:38:21
 * @FilePath: /myBlog_versionVue/src/class/click_class.ts
 */
export default class ClickClass<clickType ,parmType> {  
    clickType: clickType;
    clickParm?: parmType
    constructor (type: clickType, clickParm?: parmType) {
        this.clickType = type;
        this.clickParm = clickParm;
    }
    stringify(): string { return JSON.stringify(this); }
}