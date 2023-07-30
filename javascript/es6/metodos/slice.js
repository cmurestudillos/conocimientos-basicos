let miArray = [4, 8, 15, 16, 23, 42];
miArray.slice(2); // [15, 16, 23, 42]
miArray.slice(2, 4); // [15, 16] (la posición de fin no es inclusiva)
miArray.slice(2, -1); // [15, 16, 23]
miArray.slice(2, -2); // [15, 16]
