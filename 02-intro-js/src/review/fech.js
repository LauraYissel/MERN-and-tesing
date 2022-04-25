const apiKey = "GUko8Ncqm59DteIoV3wncXYu3AR4X7Kt";

const apiCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

 // apiCall.then(response => response.json())
 //       .then(data => console.log("data", data))        
 //       .catch(console.warn);

apiCall.then(response => response.json())
       .then(({data}) => {
         
         const { url} = data.images.original;

         const img = document.createElement("img");

         img.src = url;
         document.body.append(img);
       })        
       .catch(console.warn);