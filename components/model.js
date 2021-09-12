import React,{useEffect} from 'react'
import { Dimensions, Modal, Share,ScrollView } from 'react-native'
import {Container,Header,Content,Body,Left,Icon,Right,Title,Button} from 'native-base'
import { WebView } from 'react-native-webview';

const webViewHeight=Dimensions.get('window').height-80;

const ModalComponent =(props)=>{

    const { showModal, articleData}=props;
    let url=articleData;
  

    const handeClose=()=>{
        return props.onClose();
    }
    const handelShare=()=>{
        const {articleData,title}=props.articleData;
        const url=articleData
        message=`${title}\n\nRead More@${url}\n\nShared via News App`
        return Share.share(
            {title, message, url:message},
            {dialogTitle:  `Share ${title}`}
        )
       
    }

    if (url!=undefined){
    return(
        <>
        <Modal 
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={handeClose}
        >

        <Container style={{margin:15,marginBottom:0,backgroundColor:'white'}}>
            <Header style={{backgroundColor:'#009387'}}>
                <Left>
                    <Button onPress={handeClose} transparent>
                       <Icon name='close' style={{color:'white',fontSize:12  }}/>
                    </Button>
                </Left>
                <Body>
                    <Title children={articleData.title} style={{color:'white'}} />
                </Body>
                <Right>
                        <Button onPress={handelShare} transparent>
                            <Icon name='share' style={{ color: 'white', fontSize: 12 }} />
                        </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={{height:webViewHeight}}>
           
                <WebView source={{uri:url}} 
                style={{flex:1}} 
                            onError={handeClose} startInLoadingState scalesPageToFit={true}/>
                        
            </Content>

        </Container>

        </Modal>
        </>
        
        )
    } else{
        return null
    }
}

export default ModalComponent;