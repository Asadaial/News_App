import React, { useState, useEffect } from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base'
import { Alert, View } from 'react-native'
import ModalComponent from '../../components/model'



const tabTwo = () => {
    const [result, setResult] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalArticleData, setModalArticleData] = useState({})
    const [articleTitle, setArticleTitle] = useState({})

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=283f34a30de24dd694a812935e747fd4'
        fetch(url)
            .then(response => response.json())
            .then(json => setResult(json.articles))
            .catch((error) => {
                Alert.alert('error', error)
            });
    }, [])


    const handleItemDataOnpress = (url, title) => {

        setModalVisible(true);
        setModalArticleData(url)
        setArticleTitle(title)



    }
    const handleModalClose = () => {
        setModalVisible(false);
        setModalArticleData({})
    }
    






    return (
        <>
            <Container>

                <Content>
                   



                    <List>
                        {
                            result.map((value, key) => {
                                return (<ListItem key={key} thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: value.urlToImage != null ? value.urlToImage : 'https://scontent.fkhi5-2.fna.fbcdn.net/v/t1.6435-9/130198954_2651315281755652_2942860729917434214_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFzNoFlrDilaD50BZ_8To-46VKsFD2_kuzpUqwUPb-S7LsdfNMCrOTb-WzLIapKpWpekaZWF0Lco43YRzBrZSdG&_nc_ohc=mknjfq-hh2YAX9SdjRE&_nc_ht=scontent.fkhi5-2.fna&oh=3eac42ceeadb282d34f38c4e95d74b20&oe=61315173' }} />
                                    </Left>
                                    <Body>
                                        <Text numberOfLines={2}>{value.title}</Text>

                                        <Text note numberOfLines={2}>{value.description}</Text>
                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 8 }}>
                                            <Text note>{value.source.name}</Text>
                                            <Text note>{value.publishedAt}</Text>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Button onPress={() => handleItemDataOnpress(value.url, value.title)} transparent>
                                            <Text>View</Text>
                                        </Button>
                                    </Right>
                                </ListItem>)


                            })
                        }




                    </List>
                </Content>
                <ModalComponent
                    showModal={modalVisible}
                    articleData={modalArticleData}
                    onClose={handleModalClose}
                    title={articleTitle}
                />
            </Container>
        </>
    )

}
export default tabTwo;



