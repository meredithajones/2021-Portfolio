import React from 'react';
import Card from "react-bootstrap/Card";

import ffa from '../assets/images/ffa.gif';

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
                    deployedLink: 'https://fridge-for-all-philly.herokuapp.com/',
                    githubLink: 'https://github.com/meredithajones/Fridge_For_All',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Note Taking Application',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Daily Work Day Scheduling Application',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    selected: false
                },

                {
                    id: 3,
                    title: 'Employee Directory',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
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
    
    render(){
        return(
            <p>Carousel Works!</p>
        );
    }
}

export default Carousel;