
export abstract class Animal {

    type: any;
    id: any;
    name: string;

    constructor({ type, id }) {
        this.type = type;
        this.id = id; // Element ID
    }

    abstract setTitle(title: string): void;

    toJson(): any {
        return {
            type: this.type,
            id: this.id,
        }
    }
}
