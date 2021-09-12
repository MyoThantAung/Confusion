import { Component } from "react";
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{


    constructor(props){

        super(props);

    
    }

  
      renderDish(dish){

        const div = ()=>{

        };

        if(dish!=null){
            return(
              <>
               <div className="col-12 col-md-5 m-1">
                      
              <Card >
                <CardImg  src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>

              </div>
              <div className="col-12 col-md-5 m-1">
                <h1>Comments</h1>
                <div>Imagine all the eatables, living in conFusion!</div>
                <br></br>
                <div>--John Lemon, Oct 17,2012</div>
                <br></br>
                <div>Sends anyone to hraven n I wish Icount get my mother-in-law to eat it!</div>
                <br></br>
                <div>--Paul McVites, Sep 06,2014</div>
                <br></br>
                <div>Eat it, just eat it!</div>
                <br></br>
                <div>--Micheal Jaikishan,Feb 14,2015</div>
                <br></br>
                <div>Ultimate,Reaching for the stars!</div>
                <br></br>
                <div>--Ringo Starry, Dec 03,2013</div>
                <br></br>
                <div>It's your birthday,we'are goona party!</div>
                <br></br>
                <div>--25 Cent,Dec 03,2011</div>
              </div>
              </>
            );
        }else{
          return(
            <div></div>
          )
        }
      }
  

    render(){
        return(
          
             this.renderDish(this.props.selectedDish)
            
        );
    }

}

export default DishdetailComponent;