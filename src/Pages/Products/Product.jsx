import PropTypes from 'prop-types'


const Product = ({ title, price, category, image, rating, id, addToCart, removeFromCart, isAddedToCart }) => {

    return (
        <>
            <div className="col-lg-4" style={{ padding: '1rem' }}>
                <div className="card" style={{ width: '18rem', marginLeft: '3rem', height: '40rem' }}>
                    <img src={image} className="card-img-top" alt={title} style={{ height: '250px', objectFit: 'contain', width: 'auto' }} />
                    <div className="card-body" style={{ textAlign: 'left', padding: '1rem 0', position: 'relative' }}>
                        <h5 className="card-title">{title}</h5>
                        <div style={{ position: 'absolute', bottom: '1rem', width: '100%' }}>
                            <p className="card-text"><b>Category:</b> {category}</p>
                            <p className="card-text"><b>Rating:</b> {rating.rate}</p>
                            <p className="card-text"><b>Price: $</b>{price}</p>
                            {(isAddedToCart) ? <button onClick={() => removeFromCart(id)} type="button" className="btn btn-danger" style={{ float: 'right' }}>
                                Remove from cart</button> : <button onClick={() => addToCart(id)} type="button" className="btn btn-danger" style={{ float: 'right' }}>
                                Add to cart</button>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number
    }),
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    isAddedToCart: PropTypes.bool
}

export default Product