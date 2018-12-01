import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getItems, addItem, deleteItem} from "../actions/ItemActions";

import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    onAddItemPress() {
        const name = prompt("Enter Item");
        if (name) {
            this.props.addItem(name);
        }
    }

    removeItem(id) {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.item;
        return (
            <Container>
                <Button color={"dark"}
                        style={{marginBottom: '2rem'}}
                        onClick={this.onAddItemPress.bind(this)}>
                    Add item
                </Button>
                <ListGroup>
                    <TransitionGroup className={"shopping-list"}>
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames={"fade"}>
                                <ListGroupItem>
                                    <Button className={"remove-btn"} color={"danger"} size={"sm"}
                                            onClick={() => this.removeItem(id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
};

export default connect(mapStateToProps, {getItems, addItem, deleteItem})(ShoppingList);