
 const statDataHandler = async(event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/leaderboard/data', {
        method: 'GET',
    }).then((response) => response.json())
    .then((data) =>  console.log(data));


    if(data){
        
     //grab the Username and the bestRun in the data
       //for loop for the grabbing of the relevant
     return data;
    
}
else {

  return null;  
}
};

async function dataFix(data){

return data;

   
};



window.addEventListener('load',statDataHandler);