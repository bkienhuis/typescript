import { Snake } from "../tryout/Snake.js";
import { Cat } from "../tryout/Cat.js";

export class AnimalVisitor {
    constructor() {

    }

    async visitSnake(visitor: Snake): Promise<void> {
        console.log(" -- VISIT Snake ");
        visitor.toConsole();
        // visitor.title = "bla bla"; // Not Allowed as is private
        visitor.setTitle("bla bla");        
    }

    async visitCat(visitor: Cat): Promise<void> {
        console.log(" -- VISIT Cat ");
        visitor.toConsole();
    }
}
