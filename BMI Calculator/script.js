const form=document.querySelector('form')

// this will give empty values as page loades
// const height= parseInt(document.querySelector('#height').value);

form.addEventListener('submit' , function(e) {
    e.preventDefault()

  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const result= document.querySelector('#results')


  if(height==='' || height<0 || isNaN(height)){
   result.innerHTML='Please give a valid height';
  } else if(weight==='' || weight<0 || isNaN(weight)){
   result.innerHTML='Please give a valid weight';
  }
   else {
   const bmi= (weight/ ((height*height)/10000)).toFixed(2)

   // show result
   result.innerHTML=`<span>${bmi}</span><br>`;

   if(bmi < 18.6){
    const text=document.createTextNode("You are underweight")
    result.appendChild(text)
   } else if(bmi>=18.6 && bmi <= 24.9){
    const text=document.createTextNode("You are in normal range")
    result.appendChild(text)
   } else if(bmi >24.9){
    const text=document.createTextNode("You are overwight")
    result.appendChild(text)
   }
   }
})