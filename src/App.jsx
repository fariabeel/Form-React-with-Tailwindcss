import './App.css'

function App() {

  return (
    <>
    <form className='text-center my-auto *:text-sky-500 *:bg-blue-300/30 *:rounded-xl *:hover:bg-blue-300/50 *:transition-all
    '
    >
      <input type='text' placeholder='input text'/> <br/>
      <input type="number" placeholder="input number" step='5'/> <br/>
      <input type="submit" value="submit"/>
    </form>
    </>
  )
}

export default App
