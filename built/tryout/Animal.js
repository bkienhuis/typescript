export class Animal {
    constructor({ type, id }) {
        this.type = type;
        this.id = id; // Element ID
    }
    toJson() {
        return {
            type: this.type,
            id: this.id,
        };
    }
}
