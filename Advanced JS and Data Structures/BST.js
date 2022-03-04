class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
   /*
      getLeft(){
         return this.left;
      }
   
      getRight(){
         return this.right;
      }
   
      getVal(){
         return this.val;
      }
      */
}

module.exports = class BST {
   constructor() {
      this.root = null;
   }

   add(val) {
      //const node = new Node(val);
      if (this.root === null) {
         this.root = new Node(val);
      } else {
         function searchTree(node, val) {
            if (val < node.val) {
               if (node.left !== null)
                  return searchTree(node.left, val);
               else {
                  node.left = new Node(val);
                  return;
               }
            } else if (val > node.val) {
               if (node.right !== null)
                  return searchTree(node.right, val);
               else {
                  node.right = new Node(val);
                  return;
               }
            } else {
               // no duplicates
               return;
            }
         }

         return searchTree(this.root, val);
      }
   }

   findMax() {
      let curr = this.root;
      while (curr.right !== null) {
         curr = curr.right;
      }

      return curr.val;
   }

   findMin() {
      let curr = this.root;
      while (curr.left !== null) {
         curr = curr.left;
      }

      return curr.val;
   }


   display() {
      this.displayInOrder(this.root);
   }

   displayInOrder(node) {
      if (node.left !== null)
         this.displayInOrder(node.left);
      console.log(node.val);
      if (node.right !== null)
         this.displayInOrder(node.right);
   }
}