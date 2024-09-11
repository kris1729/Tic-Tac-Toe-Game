# Xyz
```cpp
 Node *insertAtEnd(Node *head, int x) {
        Node* a = new Node(x);
        if(head==NULL)return a;
        Node*temp = head;
        while(temp->next!=NULL){
            temp = temp->next;
        }
        
        temp->next = new Node(x);
        
        return head;
```
