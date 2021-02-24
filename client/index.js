import './stylesheets/style.css'

console.log("Webpack Working!!!");
// Default parameters in ES6/2015
let show = (m = "hola") =>{
  alert(m)
}
show()
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();
