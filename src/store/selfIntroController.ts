/*
 * @Date: 2023-11-04 15:02:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 00:42:30
 * @FilePath: /myBlog_versionVue/src/store/selfIntroController.ts
 */
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
        { title: '\u540d\u79f0', titleEn: 'Name', content: '5f205fd76d0b', key: 0 },
        { title: '\u6027\u522b', titleEn: 'Sex', content: '\u7537', key: 1 },
        { title: '\u5e74\u9f84', titleEn: 'Age', content: '21', key: 2 },
        { title: '\u5c45\u4f4f\u5730', titleEn: 'Location', content: '\u6210\u90fd\u0020\u56db\u5ddd\u0020\u4e2d\u56fd', key: 3 },
        { title: '\u5173\u952e\u5b57', titleEn: 'KeyWord', content: '\u6280\u672f\u7231\u597d\u8005\u3001\u778e\u6298\u817e\u3001\u61d2\u75c5\u60a3\u8005\u3001\u65e0\u4e0a\u5348\u7ec4\u7ec7\u3001\u591c\u884c\u6027\u3001\u756a\u5267\u0020\u002e\u002e\u002e', key: 4 },
    ];
    private infoImgGallery: ReadonlyArray<{ imgUrl: string, href: string }> = [
        { imgUrl: 'src/assets/self/infoImgLeft.jpg', href: 'https://apod.nasa.gov/apod/ap231016.html' },
        { imgUrl: 'src/assets/self/infoImgCenter.jpg', href: 'https://apod.nasa.gov/apod/ap231001.html' },
        { imgUrl: 'src/assets/self/infoImgRight.jpg', href: 'https://apod.nasa.gov/apod/ap230930.html' }
    ];
    private contactList: ReadonlyArray<{ icon: string, href: string, title: string }> = [
        { icon: 'src/assets/self/qq.svg', href: 'https://im.qq.com/index/', title: 'QQ' },
        { icon: 'src/assets/self/weChat.svg', href: 'https://weixin.qq.com/', title: '微信' },
        { icon: 'src/assets/self/163.svg', href: 'https://mail.163.com/', title: '163邮箱' },
        { icon: 'src/assets/self/github.svg', href: 'https://github.com/Gemini2035', title: 'GitHub' },
        { icon: 'src/assets/self/twitter.svg', href: 'https://twitter.com/Z2530056984', title: '推特' }
    ]

    getTitleIsVertical (): boolean { return this.titleIsVertical; }
    setTitleIsVertical (target?: boolean): void {
        if (target === undefined) this.titleIsVertical = !this.titleIsVertical;
        else this.titleIsVertical = target;
    }

    getInfoList (): ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> { return this.infoList; }

    getInfoImgList (): ReadonlyArray<{ imgUrl: string, href: string }> { return this.infoImgGallery; }

    getContactList (): ReadonlyArray<{ icon: string, href: string, title: string }> { return this.contactList; }

    resetAll (newState?: SelfIntroController): void { Object.assign(this, newState || new SelfIntroController()); }
}

export default reactive(new SelfIntroController());