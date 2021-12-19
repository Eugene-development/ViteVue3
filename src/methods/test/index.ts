function hello (who:any){
    return 'Привет' + who
}
let privet = hello ('Vasa');


let name = (who:any) => 'Привет' + who;


export const usePrivet = {
    privet,
    name
}
