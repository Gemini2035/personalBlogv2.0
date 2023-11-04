/*
 * @Date: 2023-11-04 15:39:06
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-05 03:16:29
 * @FilePath: /MyBlog_vue/src/store/basicSettings.ts
 */
import { useDark, useToggle } from '@vueuse/core'
import { WritableComputedRef, reactive } from 'vue';

class BasicSettings {
    private isDark: WritableComputedRef<boolean>;
    setIsDark: Function;

    constructor () {
        this.isDark = useDark();
        this.setIsDark = useToggle(this.isDark);
    }

    getIsDark():WritableComputedRef<boolean> { return this.isDark; }
    getDarkClass(prefix?: string): string {
        if (prefix) return this.isDark? (prefix + '-dark') : prefix
        else return this.isDark? 'dark' : '';
    }
}

export default reactive(new BasicSettings());