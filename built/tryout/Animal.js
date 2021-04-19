export class Animal {
    constructor({ type, id }) {
        this.type = type;
        this.id = id; // Element ID
        this.bla = "empty";
    }
    toJson() {
        return {
            type: this.type,
            id: this.id,
        };
    }
}
