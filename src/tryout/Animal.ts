
export abstract class Animal {

    private type: any;
    private id: any;
    protected bla: string;

    constructor({ type, id }) {
        this.type = type;
        this.id = id; // Element ID
        this.bla = "empty";
    }

    abstract setTitle(title: string): void;

    toJson(): any {
        return {
            type: this.type,
            id: this.id,
        }
    }
}
