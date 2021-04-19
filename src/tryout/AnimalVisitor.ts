import { Snake } from "../tryout/Snake.js";
import { Cat } from "../tryout/Cat.js";

export class AnimalVisitor {
    constructor() {

    }

    async visitSnake(visitor: Snake): Promise<void> {
        console.log(" -- VISIT Snake ");
    }

    async visitCat(visitor: Cat): Promise<void> {
        console.log(" -- VISIT Cat ");
    }
}
