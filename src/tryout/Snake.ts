
import { Animal } from "../tryout/Animal.js";
import { AnimalVisitor } from "./AnimalVisitor.js";

export interface ISnake {
    type: string;
    id: number;
    title?: string;
}

export class Snake extends Animal {

    private title: string;

    constructor({ type, id, title = null }: ISnake) {
        super({ type, id });
        this.title = title;
        this.bla = "Snake";
    }

    setTitle(input: string): void {
        console.log(" Set title to ", input);
        this.title = input;
    }

    toConsole() {
        console.log(" The value of bla is ", this.bla);
    }

    toJson(): any {
        var t = super.toJson();
        return {
            ...t,
            title: this.title
        }
    }

    async accept(visitor: AnimalVisitor) {
        await visitor.visitSnake(this);
    }

}
