import { Animal } from "./tryout/Animal.js";
import { ISnake, Snake } from "./tryout/Snake.js";
import { Cat } from "./tryout/Cat.js";
import { AnimalVisitor } from "./tryout/AnimalVisitor.js";

let message: string = 'Hello World';
console.log(message);



async function run(): Promise<string | void> {

    try {
        let u: ISnake = { type: "Snake-1", id: 123, title: "title" }
        let animal1: Snake = new Snake(u);

        u = { type: "Cat-2", id: 999 }
        let animal2: Cat = new Cat(u);


        let x: AnimalVisitor = new AnimalVisitor();
        await animal1.accept(x)
        await animal2.accept(x)

        console.log(" == animal ", animal1)
        console.log(" == animal ", animal2)
    } catch (e) {
        return "message";
    }
}

async function bla() {
    return run().catch(error => console.error(error.stack));
}

bla().catch(error => console.error(error.stack));
