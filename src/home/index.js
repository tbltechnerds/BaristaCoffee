/*
* Created By Thomas Woodfin
*
* */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Container, Button, List, ListItem, Left, Right, Icon} from "native-base";

const Index = (props) => {

    const [menuItems, setMenuItems] = useState([
        {
            name: "Cafe Au Lait",
            creation: 4
        },
        {
            name: "Cappuccino",
            creation: 10
        },
        {
            name: "Expresso",
            creation: 15
        },
    ]);

    const [selectedMenuItems, setSelectedMenuItems] = useState([]);

    return (
        <Container>
            <View style={styles.container}>
                <Text>Select menu items</Text>
                <List>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <ListItem key={index} noIndent>
                                    <Left>
                                        <Text>{item.name}</Text>
                                        <Text note>{item.creation} seconds</Text>
                                    </Left>
                                    <Right>
                                        <Button
                                            title="Add"
                                            small
                                            style={{paddingRight: 5, paddingLeft: 5}}
                                            onPress={() => {
                                                let updateselected = selectedMenuItems;
                                                updateselected.push(item);
                                                setSelectedMenuItems([...updateselected]);
                                            }}
                                        >
                                            <Text style={{color: "#fff"}}>Add</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Button onPress={() => {
                    props.navigation.navigate('Tickets', {selected: selectedMenuItems});
                    setSelectedMenuItems([]);
                }} title="View Tickets" block success>
                    <Text>View Tickets</Text>
                </Button>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});
export default Index;