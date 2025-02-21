/**
Given a binary tree with the following rules:

    root.val == 0
    For any treeNode:
        If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
        If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2

Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

Implement the FindElements class:

    FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
    bool find(int target) Returns true if the target value exists in the recovered binary tree.

**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.root = root;
    this.root.val = 0;
    
    sanitizeTree(this.root.left, this.root.val, true);
    sanitizeTree(this.root.right, this.root.val, false);
};


function sanitizeTree(node, value, left){
    if (!node) return;

    if(left){
        node.val = 2 * value + 1;
    } else {
        node.val = 2 * value + 2;
    }

    sanitizeTree(node.left, node.val, true);
    sanitizeTree(node.right, node.val, false);
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return find(target, this.root);
};

function find(target, node) {
    if (!node) return false;
    if (node.val === target) return true;

    return find(target, node.left) || find(target, node.right);
}


/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
