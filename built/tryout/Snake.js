var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Animal } from "../tryout/Animal.js";
export class Snake extends Animal {
    constructor({ type, id, title = null }) {
        super({ type, id });
        this.title = title;
        this.bla = "Snake";
    }
    setTitle(input) {
        console.log(" Set title to ", input);
        this.title = input;
    }
    toConsole() {
        console.log(" The value of bla is ", this.bla);
    }
    toJson() {
        var t = super.toJson();
        return Object.assign(Object.assign({}, t), { title: this.title });
    }
    accept(visitor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield visitor.visitSnake(this);
        });
    }
}
