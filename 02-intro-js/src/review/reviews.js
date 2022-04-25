import { heroes} from "../data/heroes";

function getActiveUser (name) {
    return {
      uid: "ABC567",
      username:  name,
    }
  }
  
  const activeUser = getActiveUser("Lau");
  
  console.log(activeUser);
  
  const getUser = (name) => ({ uid: "ABC8910", username:  name,});
  const user = getUser("Fede");
  
  console.log(user);
  
  const person = {
    name: "Allen",
    aka: "Flash",
    years: 32
  }
  
  const contex = ({aka, years})=> {
  
    return {
       aka,
       years
    }
  }
  
  
  const {aka, years} = contex(person);
  
  console.log(aka, years);
  
  const caracters = ["Goku", "Vegeta", "Trunks"];
  
  console.log(caracters);
  
  const [, , p3] = caracters;
  
  console.log(p3);
  
  const returnAray = () => {
  
    return ["CDF", 123];
  }
  
  const [letter, number] = returnAray();
  
  console.log(letter, number);
  
  const state = (value)=> {
    return [value, ()=> {console.log("hi")}];
  }
  
  const arr = state("Mi");
  
  console.log(arr);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [nombre, setNombre]= useState("Grogu");
  
  // console.log(nombre);
  // setNombre();
  
  console.log(heroes);
  
  
  const getHeroeById = (id)=> {
    return heroes.find((heroe)=>heroe.id === id);
  }
  
  console.log(getHeroeById(2));
  
  const getHeroeByOwner = (owner)=> {
    return heroes.filter((heroe)=>heroe.owner === owner);
  }
  
  console.log(getHeroeByOwner("DC"));
  
  const promesa = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      // console.log("2 sec");
      // resolve();
      const heroe = getHeroeById(4);
     // console.log(heroe);
      resolve(heroe);
    }, 2000)
  });
  promesa.then((heroe)=> {
   // console.log("then", heroe)
  }).catch(error => console.warn(error));
  
  
  const getHeroeByIdAsync = (id) => {
  
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        // console.log("2 sec");
        // resolve();
        const heroe = getHeroeById(id);
       // console.log(heroe);
       
        if(heroe){
          resolve(heroe);
        }else {
          reject("we cant find the heroe");
        }
      }, 2000)
    });
  }
  
  getHeroeByIdAsync(3)
      .then(console.log)
      .catch(console.warn)


const active = true;


const messageTwo = active ? "Active": "Inactive";

console.log(messageTwo);

const messageThree = active && "Active";

console.log(messageThree);