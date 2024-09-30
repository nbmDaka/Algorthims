// Array

// Lookup O(1)
// Push O(1)
// Insert O(n)
// Delete O(n)

const strings  = ['a', 'b', 'c', 'd', 'e'];

// 4*4 = 16 bytes of storage

// push
strings.push('f'); // O(1)

// pop
strings.pop(); // Removing the last item from the array
strings.pop(); // O(1)

// unshift

strings.unshift('x'); // O(n) Inserting a new item to the beginning of the array

strings.splice(2, 0, 'alien'); // O(n) Inserting a new item to the middle of the array

console.log(strings)

// Static and Dynamic Arrays
// Static Arrays - Fixed length
// Dynamic Arrays - Can grow and shrink


