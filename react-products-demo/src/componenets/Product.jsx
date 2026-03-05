function Product(props){
    let product=props.productDetails
    return(
        <div  className="w-70 min-h-90 shadow-2xl rounded-2xl flex flex-col items-center justify-evenly text-center ">
            <img src={product.image} alt="image" width="150"  />
            <h2>name: {product.name}</h2>
            <h3>brand: {product.brand}</h3>
            <p>description: {product.description}</p>
            <h3>price: ${product.price}</h3>
        </div>
    )
}
export default Product;