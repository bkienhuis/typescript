var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Snake } from "./tryout/Snake.js";
import { Cat } from "./tryout/Cat.js";
import { AnimalVisitor } from "./tryout/AnimalVisitor.js";
let message = 'Hello World';
console.log(message);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let u = { type: "Snake-1", id: 123, title: "title" };
            let animal1 = new Snake(u);
            u = { type: "Cat-2", id: 999 };
            let animal2 = new Cat(u);
            let x = new AnimalVisitor();
            yield animal1.accept(x);
            yield animal2.accept(x);
            console.log(" == animal ", animal1);
            console.log(" == animal ", animal2);
        }
        catch (e) {
            return "message";
        }
    });
}
function bla() {
    return __awaiter(this, void 0, void 0, function* () {
        return run().catch(error => console.error(error.stack));
    });
}
bla().catch(error => console.error(error.stack));
