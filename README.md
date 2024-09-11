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
```cpp
 Node* constructLL(vector<int>& arr) {
       Node*Head,*temp;
      Head = new Node(arr[0]);
       temp = Head;
      
       for(int i =1;i<arr.size();i++){
           Node* a = new Node(arr[i]);
           temp->next = a ;
           temp  = temp->next;
       }
       return Head;
    }
    ```