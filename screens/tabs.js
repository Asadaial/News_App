import React from 'react';
import { Container, Header, Content, Tab, Tabs,Left,Body,Title,Right  } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
const TabNavigation =()=> {
    
        return (
            <Container>
                <Header style={{backgroundColor:'#009387'}} hasTabs >
                    <Left />
                
                    <Body >
                        <Title style={{color:'white'}}>News App</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs >
                    <Tab textStyle={{ color:'#EEF6F9'}} activeTextStyle={{color:'white'}} tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} heading="General">
                        <Tab1 />
                    </Tab>
                    <Tab textStyle={{ color: '#EEF6F9' }} activeTextStyle={{ color: 'white' }} tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} heading="Business">
                        <Tab2 />
                    </Tab>
                    <Tab textStyle={{ color: '#EEF6F9' }} activeTextStyle={{ color: 'white' }} tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} heading="Technology">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    
}
export default TabNavigation