function App(){
/*  try{
    let age=prompt("enter yout age")
    age=Number.parseInt(age)
    if(age>150){
      throw new ReferenceError("This is probably not true")
    }
    console.log(harry)
    throw new ReferenceError("Harry is not good")
    }
    catch(error){
      console.log(error.name)
      console.log(error.message)
      console.log(error.stack)
    }
  console.log("The scirpt is still running")*/

  const f=()=>{
    try {
    let a=0
     console.log(program)
    console.log("program ran successfully")
  } catch (error) {
      console.log("This is an error")      
  }
  finally{
    console.log('I am a good boy')
    //close the file
    //exit loop
    //write to lof files
  }
  }

  
}

export default App