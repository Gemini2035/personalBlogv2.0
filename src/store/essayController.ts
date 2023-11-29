import { reactive } from "vue";
import { marked } from "marked";

class EssayDetail {
    async getMdHtml(essayId: string): Promise<string> {
        let essayMd = '';
        try {
            essayMd = await ((await fetch(`./src/data/markDown/${essayId}.md`)).text());
        } catch (e) { return Promise.reject(e); }
        return Promise.resolve(marked.parse(essayMd));
    }
}

export default reactive(new EssayDetail());