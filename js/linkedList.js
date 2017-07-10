'use strict';

/* Para entender mas facil este codigo mirar la implementacion en
ecma-script6 (ultima version de js, la cual soporta clases) en:
https://es6console.com/j33kbdb1/
*/
// Aqui hay dos clases.
// Node
// Node.data
// Node.next

// SinglyList
// SinglyList._length
// SinglyList.head
// SinglyList.add( dataToAddToNode )
// SinglyList.searchNodeAt( position )
// SinglyList.listPrint()
// SinglyList.remove( position )


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var SinglyList = function () {
  function SinglyList() {
    _classCallCheck(this, SinglyList);

    this._length = 0;
    this.head = null;
  }

  _createClass(SinglyList, [{
    key: 'add',
    value: function add(value) {
      var node = new Node(value);
      var currentNode = this.head;

      // 1st use-case: An empty list.
      // Si currentNode es igual a falso entonces
      if (!currentNode) {
        this.head = node;
        this._length++;
        return node; // Se sale del metodo add()
      }

      // 2nd use-case: An non empty list
      node.next = currentNode;
      this.head = node;
      this._length++;

      return node;
    }
  }, {
    key: 'searchNodeAt',
    value: function searchNodeAt(position) {
      var currentNode = this.head,
          length = this._length,
          count = 1,
          message = { failure: 'Failure: non-existent node in this list.' };

      // 1st use-case: An invalid position
      if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
      }

      // 2nd use-case: A valid position
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }, {
    key: 'listPrint',
    value: function listPrint() {
      var node = this.head;
      while (node) {
        console.log('Node: ', node.data.i);
        node = node.next;
      }
    }
  }, {
    key: 'remove',
    value: function remove(position) {
      var currentNode = this.head,
          length = this._length,
          count = 0,
          message = { failure: 'Failure: non-existent node in this list.' },
          beforeNodeToDelete = null,
          nodeToDelete = null,
          deletedNode = null;

      // 1st use-case: an invalid position
      if (position < 0 || position > length) {
        throw new Error(message.failure);
      }

      // 2nd use-case: the first node is removed
      if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
      }

      // 3rd use-case: any other node is removed
      while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
      }

      beforeNodeToDelete.next = nodeToDelete.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      this._length--;

      return deletedNode;
    }
  }]);

  return SinglyList;
}();
