import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import aut1 from "../../images/aut1.png";
import aut2 from "../../images/aut2.png";
import Donate from "../../images/donate.png";
import { Container, Row, Col,Button, Image, Jumbotron } from 'react-bootstrap';
import "./main.css";
class Main extends Component {

    state={
        news:'',
    }
    
    render() {
        var height="560px";
        return (
          <div>
              <Container className="head_cont" fluid >
    
            <Row >
    
              <Col className="newHead"  style={{textAlign:"center"}}>
                <h1 className="home_head">Do Your Deeds While At Home</h1>
                <span className="home_sub">Find the nearest NGOs to fund during this epidemic</span>

                <Row style={{marginTop:"50px"}}>
                  <Col  xs={12} xsOffset={6}>
                  {this.props.user.userData?
                  
                  !this.props.user.userData.isAuth?
                 
                   <Link  className="contact-submit"  to="/login">SignUp/SignIn</Link>
                  :
                  null
                 :null
            }
                  </Col>
                  
                </Row>

              </Col>
              
              
            </Row>
            </Container>

            <Container>

            <Row>
              <Col xs={8}>
                <Container>
                  <Row>
                    <Col className="home_desc" >

                    This website aims to bring forward the top NGOs to your Notice so that with your little donations you can save 100 of lives
                    </Col>
                    
                  </Row>
                </Container>
              
              </Col>
              <Col xs={4}>
                <Row xs={1}>
                  <Col xs={12}>
                    <Image className="home_desc_img" src={Donate} alt="donate" />

                  </Col>
                </Row>
              </Col>
            </Row>

                      </Container>
              

            
      </div>
          


        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      news:state.news,
      user:state.member
    }
      
  }
  
  export default connect(mapStateToProps)(Main);