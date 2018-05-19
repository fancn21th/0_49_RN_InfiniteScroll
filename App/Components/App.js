import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Footer,
} from 'native-base'
// import ScrollList from './ScrollList'
// import ScrollList from './InfiniteScrollList'
import ScrollList from './InfiniteFlatList'

const App = () => (
    <Container>
        <Header/>
        <Content>
            <ScrollList />
        </Content>
        <Footer/>
    </Container>
)

export default App
