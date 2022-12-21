

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import CardExample from './component/profile/card';
import HeaderNav from './component/profile/headernav';
import Contactme from './component/profile/contactme';
import FullName from './component/profile/FullName';
function App() {
  return (
    <div className="App">
   
     <HeaderNav id="home"/>
     <FullName firstName="HEJER" lastName="KERKENI">
      <p>Glad to know you</p>
      </FullName>
      <CardExample  id="bio"
           imgg="/photohej.jpg"
          
           FullName="Hejer"
           LastName="KERKENI"
           Profession="  Engineer Textile and Student Web Developer"
            Age="32"
            Gender="Female"
            Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping"
            desception ="After deciding I wanted to get into web development 
            the first question on my mind was “What do I learn? After doing some research,
             I ended up making my learning path based on
              what most entry-level web developer positions
               asked for, which was:"
            learninglist1="Learn HTML"
            learninglist2="Learn CSS"     
            learninglist3="Learn JAVASCRIPT"
             Academy=" Go my code"
             func = {()=> alert('My name is hejer')}/>
           
          <Contactme id="Contact"
           name="KERKENI HEJER"
           imgg="/ct.png"

          
           phone="+22 455 789"
           email="hejer.kerkeni@gmail.com"
           skills="skills:HTML,JAVASCRIPT,CSS,REACT" />
    </div>
  );
}

export default App;
