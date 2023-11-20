/*
 * @Date: 2023-11-20 20:49:00
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-20 20:55:14
 * @FilePath: /myBlog_versionVue/src/store/studyController.ts
 */
class StudyController {
    private sideNavi = false;

    getSideNavi(): boolean { return this.sideNavi; }
    setSideNavi(target?: boolean) { this.sideNavi = target || !this.sideNavi; }
}

export default StudyController;