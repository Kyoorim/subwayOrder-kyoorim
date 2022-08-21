import {useContext} from 'react'

const MenuItem =(props)=> {

    const cartCtx = useContext(CartContext);
    const price = `${props.price} 원`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            calory: props.calory,
        })
    }
    return()
}

export default MenuItem