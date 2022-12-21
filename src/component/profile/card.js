import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardExample=(props)=> {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '450px', margin:'10px',  borderRadius:' 25px' ,backgroundColor:'#00cec9' }} >
        <Card.Body >
        <Card.Img className= "circle-imgcard"   src={props.imgg}  alt="photohej"/>
          <Card.Title >
             {props.LastName} {props.FullName}
          
            
            </Card.Title>
          <Card.Text  >
             {props.Profession}
          </Card.Text >
          <Card.Text style={{textAlign:'left'}} >
            <span  ><strong> Age: </strong> </span> {props.Age} <br/>
            <span ><strong>Gender: </strong></span> {props.Gender}<br/>
            <span><strong> Interests: </strong></span>{props.Interests}<br/>
            <span><strong>Bio: </strong></span>{props.desception } 
            <ul>
              <li>{props.learninglist1} </li>
              <li> {props.learninglist2}  </li>
              <li> {props.learninglist3}  </li>
            </ul>
            <span>so I started learning this in <strong><a style={{ textDecoration: "none",color:"black"}} href="https://gomycode.com/TN-FR/home">{props.Academy} </a></strong> </span>
          </Card.Text>

          <Button  onClick={props.func}  variant="primary" style={{color:'black',backgroundColor:'#dfe6e9',borderColor:'#dfe6e9'}} >show who I am</Button>
        </Card.Body>
      </Card>

      
      
    </div>
  );
}

export default CardExample;