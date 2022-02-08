export enum Pages{
    Home="home",
    Users ="users",
    Todo ="todo list",
    Login ="login",
    Register ="register"
}
export interface PagesModule{
    id: Pages,
    name:string,
}