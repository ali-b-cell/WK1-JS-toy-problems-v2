function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) { 
      for (let j = 0; j < n - 1 - i; j++) { 
          if (arr[j] > arr[j + 1]) { 
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //
          }
      }
  }
  return arr;
}

console.log(bubbleSort([5, 6, 1, 3, 4, 2])); 




function steps(n) {
  for (let i = 1; i <= n; i++) {
      console.log("#".repeat(i));
  }
}



steps(3);




class Cylinder {
  constructor(radius, height) {
      this.radius = radius;
      this.height = height;
  }

  getVolume() {
      return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}


let myCylinder = new Cylinder(5, 10);
console.log("Volume:", myCylinder.getVolume())

