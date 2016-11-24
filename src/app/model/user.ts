export class User {
    /* not used
     you can use this class in a component for example: 
     import { User } from ../model/user
     this.user = new User('2', 'mrk', 'mark@gmail.com');
     */
    constructor(
        public id: number,
        public username: string,
        public name: string,
        public email: string,
        public phone?: string // optional
        ) { }
}
