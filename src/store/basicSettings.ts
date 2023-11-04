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