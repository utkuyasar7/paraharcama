
import './App.css';
import Header from './components/header';
import Basket from './components/Basket';
import { useState , useEffect} from 'react';
import ProductCard from "./components/productCard"
import products from "./product.json"


function App() {
  const [money,setMoney] = useState(1973827383727473837);
  const [basket,setBasket]=useState([])
  const [total,setTotal]=useState()

  
  
   ;
  


  useEffect(() => {
	  let totalDiscount = 0;
    basket.map((product) => {
      totalDiscount += product.price*product.amount;
    });
    setTotal(totalDiscount)
			
		
	}, [basket])
  return (

    <>
   <Header money ={money} setMoney = {setMoney} total = {total}/>
   <div className="flex  w-full  justify-center">
   <div className="w-[80%] flex  flex-wrap">
      {products.map((product) => (
        
        <div key={product.id} className="w-full mt-12 md:w-1/3 ">
          <ProductCard basket={basket} setBasket={setBasket} product={product} money = {money} total = {total} />
          </div>
        
      ))}

     
      </div>
    </div>

<Basket basket = {basket} total = {total} setBasket = {setBasket} />
    
    </>
  )
}

export default App;
