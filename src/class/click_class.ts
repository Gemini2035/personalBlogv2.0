/*
 * @Date: 2023-10-31 15:09:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-04 16:13:14
 * @FilePath: /MyBlog_vue/src/class/click_class.ts
 */
export type ClickType = 'back' | 'change' | 'theme';
export class ClickClass<T> {  
    clickType: ClickType;
    clickParm?: T
    constructor (type: ClickType, clickParm?: T) {
        this.clickType = type;
        this.clickParm = clickParm;
    }
}