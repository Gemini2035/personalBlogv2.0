/*
 * @Date: 2023-11-04 15:02:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-07 01:49:59
 * @FilePath: /MyBlog_vue/src/store/selfIntroController.ts
 */

import { reactive } from "vue";

class SelfIntroController {
    private titleIsVertical = false;
    private infoList: ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> = [
        { title: '名称', titleEn: 'Name', content: '5f205fd76d0b', key: 0 },
        { title: '性别', titleEn: 'Sex', content: '男', key: 1 },
        { title: '年龄', titleEn: 'Age', content: '21', key: 2 },
        { title: '居住地', titleEn: 'Location', content: '成都 四川 中国', key: 3 },
        { title: '关键字', titleEn: 'KeyWord', content: '技术爱好者、瞎折腾、懒病患者、无上午组织、夜行性、番剧 ...', key: 4 },
    ];
    private infoImgGallery: ReadonlyArray<{ imgUrl: string, href: string }> = [
        { imgUrl: 'src/assets/self/infoImgLeft.jpg', href: 'https://apod.nasa.gov/apod/ap231016.html' },
        { imgUrl: 'src/assets/self/infoImgCenter.jpg', href: 'https://apod.nasa.gov/apod/ap231001.html' },
        { imgUrl: 'src/assets/self/infoImgRight.jpg', href: 'https://apod.nasa.gov/apod/ap230930.html' }
    ];
    private contactList: ReadonlyArray<{ icon: string, href: string, title: string }> = [
        { icon: 'src/assets/site/qq.svg', href: 'https://im.qq.com/index/', title: 'QQ' },
        { icon: 'src/assets/site/weChat.svg', href: 'https://weixin.qq.com/', title: '微信' },
        { icon: 'src/assets/site/163.svg', href: 'https://mail.163.com/', title: '163邮箱' },
        { icon: 'src/assets/site/github.svg', href: 'https://github.com/Gemini2035', title: 'GitHub' },
        { icon: 'src/assets/site/twitter.svg', href: 'https://twitter.com/Z2530056984', title: '推特' }
    ]

    getTitleIsVertical (): boolean { return this.titleIsVertical; }
    setTitleIsVertical (target?: boolean): void { this.titleIsVertical = target || !this.titleIsVertical; }

    getInfoList (): ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> { return this.infoList; }

    getInfoImgList (): ReadonlyArray<{ imgUrl: string, href: string }> { return this.infoImgGallery; }

    getContactList (): ReadonlyArray<{ icon: string, href: string, title: string }> { return this.contactList; }

    resetAll(newState?: SelfIntroController): void { Object.assign(this, newState || new SelfIntroController()); }
}

export default reactive(new SelfIntroController());