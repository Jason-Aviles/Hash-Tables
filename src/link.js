class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }

}

const n1 = new Node(100)
console.log(n1)

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }


  //insert last node
  insertLast(data) {
    let node = new Node(data)
    let current;
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  //insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    const node = new Node(data)
    let current, previous;

    //set current to first 
    current = this.head
    let count = 0
    while (count < index) {
      previous = current
      count++
      current = current.next
    }
    node.next = current
    previous.next = node
    this.size++
  }
  //get at index
  getAt(index) {
    let current = this.head
    let count = 0
    while (current) {
      if (count == index) {
        console.log(current.data)
      }
      count++
      current = current.next
    }
    return null;
  }
  //remove at index

  removeAt(index) {
    if (index > 0 && ndex > this.size) {
      return
    }
    let current = this.head
    let previous
    let count = 0
    if (index === 0) {
      this.head = current.next
    } else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.size--
  }

  //clear list

  //print
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
const ll = new LinkedList()
ll.insertFirst(11)
ll.insertFirst(200)
console.log(ll)

ll.printListData()