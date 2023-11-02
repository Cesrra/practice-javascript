/*------RESOLVER------
información
1. recibe 2 listas de números nums1 y nums2
2. ambas están ordenadas de forma ascendente
3. tmabien recibe m y n son la cantidad de elementos
en nums1 y nums 2 respectivamente
4. se debe combinar las 2 listas en una sola
5 se debe ordenar de forma ascendente
6. nums1 tiene una longitud real de m + n
7. pero los n elementos son ceros y no se tienen encuenta
8. los numeros repetidos deben ir en la respuesta
9. 

Preguntas
1. pueden venir los arrays vacios?
2. pueden ser los arrays un tipo de dato diferente?
3. los elementos dentro de los array son siempre númericos?
4. pueden no venir los numeros m y n?
5. pueden ser m y n valores no númericos?
6. puede ser que en nums1 algun elemento de n sea != 0?
-------------------NO CONTEMPLADO----------------------
7. pueden venir números negativos?
8. pueden haber ceros que sean validos?

Diseño
1. quitar los ceros de nums1, los que estan a la izquierda (n)
2. hacer spret de los valores de nums1 y nums2 en un sólo array
3. ordenar este nuevo array de forma ascendente
4. retornar el array nuevo y ordenado
*/


/*------APRENDIDO------



*/
/// Mi soulución /// O(logn)
const mergeTwoSortedLists2 = (nums1, nums2, m, n) => {
    return  [ ...nums1.slice(0, m), ...nums2].sort((a,b) => a-b)
}

/// Mejor solución /// O(n)
const mergeTwoSortedLists = (nums1, nums2, m, n) => {
    let punter_end = n+m-1
    let punter_m = m-1
    let punter_n = n-1
    for (punter_end; punter_end >= 0; punter_end--) {
        const element_n1 = nums1[punter_m]
        const element_n2 = nums2[punter_n]
        
        if((element_n1 >= element_n2) || element_n2 == null) {
            nums1[punter_end] = element_n1
            punter_m--
        }
        if((element_n1 < element_n2) || element_n1 == null) {
            nums1[punter_end] = element_n2
            punter_n--
        }
    }
    return nums1
}

module.exports = mergeTwoSortedLists