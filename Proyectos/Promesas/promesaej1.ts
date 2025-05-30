// Esta función retorna una Promise que se resuelve después de 2 segundos
export function obtenerDatosDesdeServidor(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // cambiar a false para simular un error
            if (exito) {
                resolve("Datos recibidos del servidor");
            } else {
                reject("Error al obtener datos");
            }
        }, 2000);
    });
}

// Función async que usa await para esperar la respuesta de la Promise
async function ejecutarProceso() {
    try {
        console.log("Solicitando datos...");
        const datos = await obtenerDatosDesdeServidor(); // Espera que la Promise se resuelva
        console.log("Respuesta:", datos);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

// Ejecutar la función
ejecutarProceso();
