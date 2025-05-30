// Esta función retorna una Promise que se resuelve después de 2 segundos
export function obtenerFrutaDesdelatienda(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hayFruta = true; // cambiar a false para simular que no hay frutas
            if (hayFruta) {
                resolve("🍌 Banana recibida al cliente");
            } else {
                reject("❌ No se pudo obtener la fruta");
            }
        }, 2000);
    });
}

// Función async que usa await para esperar la respuesta de la Promise
async function pedirFruta() {
    try {
        console.log("🥝 Solicitando fruta al señor de la tienda...");
        const fruta = await obtenerFrutaDesdelatienda(); // Espera que la Promise se resuelva
        console.log("✅ Fruta recibida:", fruta);
    } catch (error) {
        console.error("🚨 Ocurrió un error:", error);
    }
}

// Ejecutar la función
pedirFruta();
