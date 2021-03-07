import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ffa from '../assets/images/ffa.gif';
import note from '../assets/images/note_taker.gif';
import work from '../assets/images/fitness_tracker.gif';
import dir from '../assets/images/staff_directory.gif';
import Card from './Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Fridge For All',
                    subTitle: 'A collaborative project creating an inventory tracking \n system for community fridges in Phialdelphia' ,
                    imgSrc: ffa ,
                    link: 'https://fridge-for-all-philly.herokuapp.com/',
                    gitLink: 'https://github.com/meredithajones/Fridge_For_All',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Note Taking Application',
                    subTitle: 'An app for users to store and delete notes',
                    imgSrc: note ,
                    link: 'https://boiling-citadel-67370.herokuapp.com/',
                    gitLink: 'https://github.com/meredithajones/note_taking_app',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Fitness Tracker Application',
                    subTitle: 'An app for users to keep track of the type and duration of workouts',
                    imgSrc: work ,
                    link: 'https://morning-reef-44056.herokuapp.com/?id=6022f139e7cfc80015cd1c9b',
                    gitLink: 'https://github.com/meredithajones/get_fit',
                    selected: false
                },

                {
                    id: 3,
                    title: 'Employee Directory',
                    subTitle: 'A directory app to create an easy way for users to search for fellow staff members',
                    imgSrc: dir ,
                    link: 'https://meredithajones.github.io/Employee_Directory/',
                    gitLink: 'https://github.com/meredithajones/Employee_Directory',
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