export class User {
    constructor(
        public email: string, 
        public name: string, 
        private password: string) {}

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    "moana@gmail.com": new User('moana@gmail.com', 'Moana', 'tefit'),
    "ralph@gmail.com": new User('ralph@gmail.com', 'Ralph', 'vanellope')
}
