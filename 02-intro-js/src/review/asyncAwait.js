const getImagePromise = () => {

    return new Promise((resolve, reject) => {
       resolve("https://developer.mozilla.org/es/docs/Web/API/Fetch_API")
     })
   }
   
   getImagePromise().then(console.log);
   
   const getImageAsync = async ( )=> {
   
     return await "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function";
   
   }
   getImageAsync().then(console.log);
   
   
   const getApiData = async() =>{
   
     try {
       const apiKey = "GUko8Ncqm59DteIoV3wncXYu3AR4X7Kt";
   
     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
   
     const {data} = await response.json();
   
     const { url} = data.images.original;
   
     const img = document.createElement("img");
   
            img.src = url;
            document.body.append(img);
   
     } catch (error) {
       console.warn(error);
     }
   
   }
   
   getApiData();