// If...Else

let temperature = 35

if(temperature <= 36){
  console.log("Temperatura de cadaver")
} else if(temperature>36&&temperature<37.5){
  console.log("Temperatura normal")
} else{
  console.log("Quarentena nele")
}

// quando possui apenas uma linha de código, pode ser usado sem chaves, não recomendado

// posso definir "ranges" antes do if else

let highTemperature = temperature >= 37.5 
let lowTemperature = temperature <= 36

if(lowTemperature){
  console.log("Temperatura de cadaver")
} else if(highTemperature){
  console.log("Quarentena nele")
} else{
  console.log("Temperatura normal")
}


