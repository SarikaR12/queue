class quick {
    constructor() {
        this.queue = []
        this.size = 5;
    }
    insert(element) {
        if (this.queue.length < this.size) {
            this.queue.push(element)
        } else {
            console.log("queue is overflow");
        }
    }
    remove() {
        if (this.queue.length != 0) {
            for (i = 0; i < this.queue.length; i++) {
                if (this.queue[0] != this.queue[i]) {
                    console.log(this.queue[i]);
                }
            }

        }
    }

    travel() {
        this.queue.map((val, ind) => {
            console.log(val);
        })
    }

    firstElement(){
        if(this.queue.length!=0){
            console.log("first ele", this.queue[0]);
        }
    }
    lastElement(){
        if(this.queue.length!=0){
            console.log("last ele", this.queue[this.queue.length - 1]);
        }
    }
    lastsecondElement(){
        if(this.queue.length!=0){
            console.log("last sec ele", this.queue[this.queue.length-2]);
        }
    }
}




let q1 = new quick()
q1.insert(10)
q1.insert(11)
q1.insert(13)
q1.insert(22)
q1.insert(333)
// q1.insert(33)
q1.travel()
q1.firstElement(2)
q1.lastElement(2)
q1.lastsecondElement(2)
