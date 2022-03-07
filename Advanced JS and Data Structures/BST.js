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

   remove(data) {
      // root is re-initialized with
      // root of a modified tree.
      this.root = this.removeNode(this.root, data);
   }


   removeNode(node, val) {

      // if the root is null then tree is
      // empty
      if (node === null)
         return null;

      // if data to be delete is less than
      // roots data then move to left subtree
      else if (val < node.val) {
         node.left = this.removeNode(node.left, val);
         return node;
      }

      // if data to be delete is greater than
      // roots data then move to right subtree
      else if (val > node.val) {
         node.right = this.removeNode(node.right, val);
         return node;
      }

      // if data is similar to the root's data
      // then delete this node
      else {
         // deleting node with no children
         if (node.left === null && node.right === null) {
            node = null;
            return node;
         }

         // deleting node with one children
         if (node.left === null) {
            node = node.right;
            return node;
         }

         else if (node.right === null) {
            node = node.left;
            return node;
         }

         // Deleting node with two children
         // minimum node of the right subtree
         // is stored in aux
         var minVal = this.findMin(node.right);
         node.val = minVal;

         node.right = this.removeNode(node.right, minVal);
         return node;
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