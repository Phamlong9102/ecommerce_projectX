function Products() {
    return (
        <h2>Products</h2>
    );
}

export default Products;


// import { useEffect, useState } from "react";

// function Products(props) {

//     const [state, setState] = useState([]);

//     useEffect(() => {
//         getAll();   
//     }, []);
    
//     const getAll = () => {
//         let link = 'http://localhost:8080/api/products'
//         axios.get(link).then(res => {
//             setState(res.data)
//         }).catch(err => console.log(err))
//     }

//     {state.forEach(x => {
//         return <h2 key={x.id}>{ x.Products }</h2>; 
//     });   }
// }

// export default Products;