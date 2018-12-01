import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import {Container} from "reactstrap";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./containers/ItemModal";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar/>
                    <Container>
                        <ItemModal/>
                        <ShoppingList/>
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
