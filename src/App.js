
import './App.css';

function App() {
 
 
    function Onsubmit(e){
      e.preventDefault();

     
      let result = document.getElementById("result");
      let form = document.querySelectorAll("form input");

      if(form[0].value===""){
        result.innerText="Please Enter Full Name";
        result.style.color="Blue"
      }
      else if(form[1].value===""){
        result.innerText="Please Enter Email Address";
        result.style.color="Blue"
      }
      else if(form[2].value===""){
        result.innerText="Please Enter Password";
        result.style.color="black"
      }
      else if(form[3].value===""){
        result.innerText="Please Enter conmmfirm-Password";
        result.style.color="black"
      }
      else if(form[2].value!==form[3].value){
        result.innerText="Password not match..!!";
        result.style.color="red"
      }
      else{
        result.innerText="Sign -Up completed successfly";
        result.style.color="green"
      }
     

    }
  return (
    <div className="App">
      <div className='App-left'>
        <div className='App-img'>
          <h1>Find 3d Objects,Mockups and Ilustration here</h1>
        <img src='https://signup-page-by-piyush.netlify.app/static/media/Abstraction.f766c0afde63e5918a48441cead305d5.svg' className="App-img-1" alt='img'></img>
        </div>
      </div>
      <div className='App-right'>
       <div className='App-right-1'>
      <h1>Create Account</h1>
       <header className='App-inside App-header'>
          <div className='icon'><img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='img'></img>Sign up with Google</div>

          <div className='icon'><img src='data:image/png;base64,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' alt='img'></img>Sign up with Facebook</div>
        </header>
        <p>-OR-</p>
        <div className='Form App-inside'>
          <form onSubmit={Onsubmit}>
            <input type='Text' placeholder='Full Name'>
            </input>
            <input type='email' placeholder='Email Address'></input>
            <input type='password' placeholder='PassWord'></input>
            <input type='password' placeholder='Confirm PassWord'></input>
            <button type='submit' >Create Account</button>
          </form>
          <div id="result">

          </div>
        </div></div>
      </div>
    </div>
  );
}

export default App;
