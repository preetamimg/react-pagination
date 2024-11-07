
# React Pagination

A lightweight and customizable pagination component for React. This component allows you to easily add pagination to your React applications, handling previous and next navigation and providing options to display specific page numbers.


## Usage/Examples

```javascript
import Pagination from "preetam-test-package-3/dist/Pagination";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const totalPages = 10;
  
  return 
    <Pagination
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPages={totalPages}
    />
}
```


## Authors

- [@preetamimg](https://github.com/preetamimg)

