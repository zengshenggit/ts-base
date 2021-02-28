/*
 * The Index
 */

class Index {
    constructor(title: string, content: string) {
        this.elementOf('title').innerText = title;
        this.elementOf('body').innerHTML = `<h1>${content}<h1>`;
    }

    elementOf(elem: string): HTMLElement {
        return document.getElementsByTagName(elem)[0] as HTMLElement;
    }
}

new Index('The index', 'Yes, it works !');
