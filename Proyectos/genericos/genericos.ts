
export const imprimirobjeto = (argumento: any) => {
    console.log(argumento);
}

export function funcionGenerica<T>(argumento: T): T {
    return argumento;
}

export const funcionGenericaflecha = <T> (argumento: T)=> {
    return argumento;
}


export const funcionGenericaflecha2 = <T> (argumento: T)=> argumento;