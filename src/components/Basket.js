function Basket({ basket, total, setBasket }) {

    function resetBasket() {
      setBasket([]);
    }
  
    return (
      <div className="w-full flex justify-center mt-12">
        {basket.length === 0 ? (
          <p className="text-2xl">Sepetiniz boş</p>
        ) : (
          <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-semibold">Order items</h2>
            <ul className="flex flex-col pt-4 space-y-2">
              {basket.map((product) => (
                <li className="flex items-start justify-between">
                  <h3>
                    {product.title}x
                    <span className="text-sm dark:text-violet-400">
                      {product.amount}
                    </span>
                  </h3>
                  <div className="text-right">
                    <span className="block">{product.price * product.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2">
              <div className="flex flex-col"></div>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">{total}</span>
                </div>
                <button
                  type="button"
                  className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                  onClick={resetBasket}
                >
                  Reset Basket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Basket;
  
