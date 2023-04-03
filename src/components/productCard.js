function ProductCard({product,total,basket,setBasket,money}){

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
		const checkBasket = basket.find(item => item.id === product.id)
		// ürün daha önce eklenmiş
		if (checkBasket) {
			checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
            console.log(basketItem.price)
		} else {
			setBasket([...basket, {
				id: product.id,
                title : product.title,
                price : product.price,
				amount: 1,
			}])
		}
	}
    const removeBasket = () => {
		const currentBasket = basket.find(item => item.id === product.id)
		const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
		currentBasket.amount -= 1
		if (currentBasket.amount === 0) {
			setBasket([...basketWithoutCurrent])
		} else {
			setBasket([...basketWithoutCurrent, currentBasket])
		}
	}
    
    return(
        <div className="flex ">
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
	<img src={product.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{product.title}</h2>
            <p className="opacity-50">${product.price}</p>
			
		</div>
        <div className="flex justify-between">
        <button type="button" disabled = {basketItem && basketItem.price > total || product.price > money-total} onClick={addBasket}  className="disabled:bg-red-300 flex items-center justify-center w-1/3 p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">+</button>
        <p>{basketItem && basketItem.amount || 0}</p>
        <button type="button" disabled = {!basketItem}onClick={removeBasket}  className="disabled:bg-red-300 flex items-center justify-center w-1/3 p-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">-</button>

        </div>
		

	</div>
</div>

        </div>
    )
}

export default ProductCard