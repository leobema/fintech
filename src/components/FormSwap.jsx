
import { useState, useEffect } from 'react';

function FormSwap() {

    const [selectedCoin, setSelectedCoin] = useState('');
    const [amount, setAmount] = useState('');
    const [ars, setArs] = useState(0);
  
    useEffect(() => {
      fetch("https://dolarapi.com/v1/dolares/blue")
        .then(response => response.json())
        .then(data => {
          setArs(data.venta);
        })
        .catch(error => console.error('Error fetching the ARS value:', error));
    }, []);
  
    const handleCoinChange = (event) => {
      setSelectedCoin(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      const value = event.target.value;
      if (value > 0) {
        setAmount(value);
      } else {
        setAmount('');
      }
    };
  
    const handleSendMessage = () => {
      const message = `Hola, quiero comprar ${amount} USD con ${selectedCoin}. El monto en ARS es ${amount * ars} ARS.`;
      const whatsappUrl = `https://wa.me/5492612514163?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  
    const calculatedValue = amount ? amount * ars : '';

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">¿Que moneda deseas intercambiar?</h5>            
  <form className="max-w-sm mx-auto">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona una opción</label>
    <select 
      id="coin" 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={selectedCoin}
      onChange={handleCoinChange}
      >
      <option value="" selected>Escoge una Moneda</option>
      <option value="ARS">Argentina ($ARS)</option>
    </select>
  </form>
  {selectedCoin === 'ARS' && (
<div className="mt-4 p-4 bg-gray-50 border rounded-lg">
  <h6 className="text-lg font-semibold text-gray-800 dark:text-white">Precio actual $ARS/$USD <span className=' text-4xl'>${ars}/usd</span></h6>
    <form className="max-w-sm mx-auto">
        <label 
            id="coin2" 
            className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
            Recibes:
        </label>
        <input 
        type="number" 
        id="number-input" 
        aria-describedby="helper-text-explanation" 
        className="mb-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="valor en USD" 
        value={amount}
        onChange={handleAmountChange}
        required 
        />
        <div>
          <a 
          href='#' 
          className='w-full flex justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="m21.897 13.404.008-.057v.002c.024-.178.044-.357.058-.537.024-.302-.189-.811-.749-.811-.391 0-.715.3-.747.69-.018.221-.044.44-.078.656-.645 4.051-4.158 7.153-8.391 7.153-3.037 0-5.704-1.597-7.206-3.995l1.991-.005c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.033c-.414 0-.75.336-.75.75v4.049c0 .414.336.75.75.75s.75-.335.75-.75l.003-2.525c1.765 2.836 4.911 4.726 8.495 4.726 5.042 0 9.217-3.741 9.899-8.596zm-19.774-2.974-.009.056v-.002c-.035.233-.063.469-.082.708-.024.302.189.811.749.811.391 0 .715-.3.747-.69.022-.28.058-.556.107-.827.716-3.968 4.189-6.982 8.362-6.982 3.037 0 5.704 1.597 7.206 3.995l-1.991.005c-.414 0-.75.336-.75.75s.336.75.75.75h4.033c.414 0 .75-.336.75-.75v-4.049c0-.414-.336-.75-.75-.75s-.75.335-.75.75l-.003 2.525c-1.765-2.836-4.911-4.726-8.495-4.726-4.984 0-9.12 3.654-9.874 8.426z" 
                />
            </svg>
          </a>
        </div>
         <label 
            id="coin3" 
            className="block text-sm font-medium text-gray-900 dark:text-white">
            Depositas:
        </label>
        <input 
        type="number" 
        id="number-input" 
        aria-describedby="helper-text-explanation" 
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="valor en USD" 
        value={calculatedValue}
        onChange={handleAmountChange}
        readOnly 
        />
    </form>
    {amount && (
    <div className="mt-4">
      <p className="text-lg font-medium text-gray-900 dark:text-white">
        Monto en $ARS a cambiar <span className="text-2xl">${calculatedValue}</span>
        {' '} y usted recibirá: <span className="text-green-700 text-2xl">{amount}$ USD</span>
      </p>
      <button className=' mt-2 w-full bg-green-400 p-2 border-spacing-2 rounded-md' onClick={handleSendMessage}>CAMBIAR DOLARES</button>
    </div>
  )}
</div>
)}
</div>
  )
}

export default FormSwap
