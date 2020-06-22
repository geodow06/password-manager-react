import { BehaviorSubject } from 'rxjs';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    getToken,
    authenticated,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(user,username){
    console.log(user)
    localStorage.setItem('currentUser',JSON.stringify(user))
    currentUserSubject.next(user);
    return user;
}

function logout(){
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function getToken(){
    return (JSON.parse(localStorage.getItem('currentUser')).jwt).split(" ")[1]
}

function authenticated(){
    if(localStorage.getItem('currentUser')){
        return true
    }
    return false
}

export default authenticationService;