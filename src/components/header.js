function Header({money,setMoney,total}){
    
    return (
        <>
        {money-total == 0 &&(
            <div className="w-full h-12 bg-gray-300 flex justify-center items-center fixed">Paranız Kalmadı</div>
        )}
       {money-total > 0 &&(
        <div className="w-full h-12 bg-gray-300 flex justify-center items-center fixed">Harcayacak {money-total} dolarınız kaldı</div>
       )}
        
        </>
    )
}

export default Header


