// leetCode question about water collection

function trappedWater(height) {
  // start pointer
  let left = 0;
  // end pointer
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  return water;
}

let arr = [4, 2, 0, 3, 2, 5];
console.log(trappedWater(arr)); //output 9
