export interface Datauser {
    message:    string;
    isLoggedIn: boolean;
    user:       User;
}

export interface User {
    email:           string;
    name:            string;
    lastName:        string;
    preferredGender: string;
}