import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
    Image,
} from 'react-native'
import sourceData from '../Data'
import styles from './Styles/ScrollListStyle'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class InfiniteFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoadingMore: false,
            _data: null,
        };
    }

    componentDidMount() {
        this.fetchData(data => {
            this.setState({
                isLoading: false,
                _data: data,
            });
        })
    }

    fetchData(callback) {
        delay(5000).then(() => callback(sourceData.data.children))
    }

    fetchMore() {
        this.fetchData(data => {
            const newData = this.state._data.concat(data);
            this.setState({
                isLoadingMore: false,
                _data: newData,
            });
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        } else {
            return (
                <FlatList
                    data={this.state._data}
                    keyExtractor={(item, index) => index}
                    onEndReached={() =>
                        this.setState({ isLoadingMore: true }, () => this.fetchMore())}
                    ListFooterComponent={() => {
                        return (
                            this.state.isLoadingMore &&
                            <View style={{ flex: 1 }}>
                                <ActivityIndicator size="small" />
                            </View>
                        );
                    }}
                    renderItem={({item: rowData}) => {
                        return (
                            <View style={styles.listItem}>
                                <View style={styles.imageWrapper}>
                                    <Image
                                        style={{ width: 70, height: 70 }}
                                        source={{
                                            uri: rowData.data.icon_img === ""
                                                ? "https://via.placeholder.com/70x70.jpg"
                                                : rowData.data.icon_img
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.title}>
                                        {rowData.data.display_name}
                                    </Text>
                                    <Text style={styles.subtitle}>
                                        {rowData.data.public_description}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            )
        }
    }
}

export default InfiniteFlatList
