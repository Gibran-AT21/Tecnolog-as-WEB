# 🕹️ Explicación del código 

Este código busca el nombre y la edad de la persona más joven y la más vieja en dos arreglos: uno con nombres y otro con edades.

## 📌 ¿Cómo funciona?

1. **Definición de los arreglos:**  
   Se crean dos arreglos, uno llamado nombre con los nombres de las personas y otro llamado edad con sus edades.

2. **Encontrar el menor y el mayor:**  
   - Se uso `Math.min(...edad)` para encontrar la edad más baja y `Math.max(...edad)` para la más alta.
   - Luego, con indexOf, se obtiene el índice de esas edades en el arreglo edad.

3. **Resultado del problema arrays:**  
   Se imprime en consola el nombre y la edad de la persona más joven y la más vieja usando los índices encontrados.

### ⭕ Salida en la consola:

- Pedro es el menor con 18 años.

- Paco es el mayor con 50 años.

