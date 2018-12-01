import React from 'react';
import {Button, Form, FormGroup, Input, Modal, ModalBody, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {addItem} from "../actions/ItemActions";

class ItemModal extends React.Component {
    state = {
        isOpen: false,
        name: ""
    };

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.name.length > 0) {
            this.props.addItem(this.state.name);
            this.setState({isOpen: false});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className={"flex flexEnd"}>
                <Button onClick={this.toggle.bind(this)} color={"dark"} style={{marginBottom: "1rem"}}>Add Item</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle.bind(this)}>
                    <ModalHeader>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup className={"flex flexEnd"}>
                                <Input type={"text"}
                                       name={"name"}
                                       id={"item"}
                                       placeholder={"Add shopping item"}
                                       onChange={this.onChange.bind(this)}/>
                                <Button onClick={this.onSubmit.bind(this)} color={"dark"} style={{
                                    marginLeft: '1rem',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem'
                                }}>Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect(null, {addItem})(ItemModal);