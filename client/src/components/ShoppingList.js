import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getItems, deleteItem} from "../actions/ItemActions";

import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    removeItem(id) {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.item;
        return (
            <div>
                <ListGroup>
                    <TransitionGroup className={"shopping-list"}>
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames={"fade"}>
                                <ListGroupItem>
                                    <Button className={"remove-btn"} color={"danger"} size={"sm"}
                                            onClick={() => this.removeItem(_id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
};

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);