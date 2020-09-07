/*
* Created By Thomas Woodfin
*
* */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {Container, Button, List, ListItem, Left, Right, Icon} from "native-base";

const Index = (props) => {

    const [selected, setSelected] = useState([]);
    const [tickets, setTickets] = useState(() => {
        let theTickets = [];
        props.route.params.selected.map((item, index) => {
            theTickets[index] = {
                name: item.name,
                creation: item.creation,
                status: "working",
            };
        });
        return theTickets;
    });

    useEffect(() => {
        // console.log('props: ', props.route.params);
        setSelected(props.route.params.selected);
        startBarista();
    }, []);

    const startBarista = () => {
        for (let sm in tickets){
            setTimeout(() => {
                console.log('sm: ', sm);
                tickets[sm].status = 'done';
            }, parseInt(tickets.creation)*1000);
        }
    }

    return (
        <Container>
            <View style={styles.container}>
                <List>
                    {
                        tickets.map((item, index) => {
                            return (
                                <ListItem key={index} noIndent>
                                    <Left>
                                        <Text>{item.name}</Text>
                                    </Left>
                                    <Right>
                                        <Text note>{item.status}</Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default Index;