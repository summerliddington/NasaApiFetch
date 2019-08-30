fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(response => response.json())
    .then(parsedData => {
        console.table(parsedData)
        printToDom(parsedData) //This is the last step after                            you set up function at the end
    })
//creating a function based on the console table info and what you are trying to pull from it. Could include more info than just the image src below
    function nasaTemplate (pictObj){
        return `
            <div>
            <img src="${pictObj.url}" alt="nasa pic">
            </div>
            `
    }
//after creating the above function, then connect to html class
    const domContainer = document.querySelector(".img")  
//call a new function to wrap back up to the top to complete the fetch. 
   function printToDom(data){
       domContainer.innerHTML = nasaTemplate(data)
    };
    