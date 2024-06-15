import { useState } from 'react';

function App() {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [amount, setAmount] = useState('');
  const ars = 1280;

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSendMessage = () => {
    const message = `Hola, quiero comprar ${amount} USD con ${selectedCoin}. El monto en ARS es ${amount * ars} ARS.`;
    const whatsappUrl = `https://wa.me/5492612514163?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const calculatedValue = amount ? amount * ars : '';

  return (
    <>
    <section className=" w-full h-[740px] bg-slate-200">
      <div className="p-10 container mx-auto">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">¿Que moneda deseas intercambiar?</h5>            
                <form className="max-w-sm mx-auto">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                  <select 
                    id="coin" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedCoin}
                    onChange={handleCoinChange}
                    >
                    <option value="" selected>Escoge una Moneda</option>
                    <option value="ARS">Argentina ($ARS)</option>
                  </select>
                </form>
                {selectedCoin === 'ARS' && (
              <div className="mt-4 p-4 bg-green-50 border border-blue-300 rounded-lg">
                <h6 className="text-lg font-semibold text-gray-800 dark:text-white">Precio actual $ARS/$USD <span className=' text-4xl'>${ars}/usd</span></h6>
                  <form className="max-w-sm mx-auto">
                      <label 
                          id="coin2" 
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Ingrese el monto en USD:
                      </label>
                      <input 
                      type="number" 
                      id="number-input" 
                      aria-describedby="helper-text-explanation" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="valor en USD" 
                      value={amount}
                      onChange={handleAmountChange}
                      required 
                      />
                  </form>
                  {amount && (
                  <div className="mt-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Monto en $ARS a cambiar <span className="text-2xl">${calculatedValue}</span>
                      {' '} y usted recibirá: <span className="text-green-700 text-2xl">{amount}$ USD</span>
                    </p>
                    <button className=' mt-2 bg-green-400 p-2 border-spacing-2 rounded-md' onClick={handleSendMessage}>Cambiar</button>
                  </div>
                )}
              </div>
            )}
            </div>
        </div>
     </section>
    </>
  )
}

export default App
