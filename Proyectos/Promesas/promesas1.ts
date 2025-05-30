export function fetchData(url: string): Promise<string> { 
  return new Promise((resolve, reject) => { 
    // Simular una solicitud de red asincrónica 
    setTimeout(() => { 
      if (Math.random() > 0.5) { 
        resolve("¡Datos obtenidos correctamente!"); 
      } else { 
        reject(new Error("Error de red")); 
      } 
    }, 1000); 
  }); 
}

export async function fetchDataWithAsyncAwait(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);  
  }
}

async function getUserData() {
  try {
    const userData = await fetchDataWithAsyncAwait("https://api.example.com/users/1");
    console.log(userData); 
  } catch (error) {
    console.error("Failed to get user data:", error); 
  }
}