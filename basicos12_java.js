function averageWord(list) {
  let totalSum = 0;
  let count = 0;

  for (const item of list) {
    if (typeof item === 'number') {
      totalSum += item;
    } else if (typeof item === 'string') {
      totalSum += item.length;
    }
    count++; // Contamos cada elemento para el promedio
  }

  if (count === 0) {
    return 0; // Para evitar división por cero si el array está vacío
  }

  return totalSum / count;
}

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
console.log(averageWord(mixedElements));