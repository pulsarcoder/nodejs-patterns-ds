class BinaryHeap {
    heapArr = []; // array holding the elements of heap
    capacity; // maximum possible size of heap
    heapSize; // no of elements in heap

    minHeapify() {

    }

    parent = (i) => ((i-1)/2)

    left = (i) => ((2*i) + 1)

    right = (i) => ((2*i) + 2)

    extractMin() {

    }

    decreaseKey(i, newVal) {

    }

    getMin = () => this.heapArr[0];

    deleteKey = (i) => {}

    insertKey = (value) => {
        if (this.heapSize === this.capacity) {
            console.log('Overflow: could not insert key');
            return;
        }
        // first insert the new at the end
        this.heapSize++;
        let i = this.heapSize - 1;
        this.heapArr[i] = value;

        while(i != 0 && this.heapArr[this.parent(i)] > this.heapArr[i]) {
            const temp = this.heapArr[this.parent(i)];
            this.heapArr[this.parent(i)] = this.heapArr[i];
            this.heapArr[i] = temp;
            i = this.parent(i);
        }
    }
}