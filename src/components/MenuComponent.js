import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{

  constructor(props){
    super(props);

    this.state={
      selectedDish:null,
      comments:null
    };
  }

  onDishSelect(dish)
  {
    this.setState({selectedDish:dish,comments:dish.comments});
  }

  renderComment(comments)
  {
    if(comments != null)
    {
      return(
        <div>
          
        </div>
      );
    }
    else
    {
      return (
        <div></div>
      );
    }
  }

  renderDish(dish)
  {
    if(dish != null)
    {
      return (
        <div>

            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>


        </div>


      );
    }
    else
    {
      return (
        <div></div>
      );
    }
  }


  render(){

    const menu = this.props.dishes.map((dish)=>{

      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=> this.onDishSelect(dish)}>

              <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>

        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div  className="col-12 col-md-7 m-1" >
            {this.renderComment(this.state.comments)}
          </div>
        </div>
      </div>
    );
  }
}




export default Menu;
