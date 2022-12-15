export class Employee {

    public readonly firstName: string;
    public readonly lastName: string;
    public readonly birthday: string;
    public readonly address: string;
    public readonly role: string;

    constructor(firstName: string, lastName: string, birthday: string, address: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }
    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getBirthday(): string {
        return this.birthday;
    }

    getAddress(): string {
        return this.address;
    }

    getRole(): string {
        return this.role;
    }
}