import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ffa from '../assets/images/ffa.gif';
import Card from './Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Fridge For All',
                    subTitle: 'A collaboration to create an inventory system for community fridges in Phialdelphia' ,
                    imgSrc: ffa ,
                    link: 'https://fridge-for-all-philly.herokuapp.com/',
                    gitLink: 'https://github.com/meredithajones/Fridge_For_All',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Note Taking Application',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Daily Work Day Scheduling Application',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },

                {
                    id: 3,
                    title: 'Employee Directory',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;