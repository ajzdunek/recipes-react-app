import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(

      <div className="py-5">
      
      <Container>

      <Row>

      <Col sm>


      <h1>{title}</h1>



    <ol> {ingredients.map(ingredient =>(
        <li className="ingredients-text">{ingredient.text}</li>
      ))}
    </ol>
    
 


      <h4>Calories: {calories.toFixed()}</h4>


      <img src={image} alt="" />

      </Col>

      </Row>

      </Container>

      
      </div>

      




    );
    
}



export default Recipe;


