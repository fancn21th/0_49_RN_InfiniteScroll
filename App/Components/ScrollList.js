import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    ListView,
    Text,
    Image,
} from 'react-native'
import sourceData from '../Data'
import styles from './Styles/ScrollListStyle'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class ScrollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            isLoading: true
        };
    }

    componentDidMount() {
        delay(2000).then(() => {
            let ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({
                dataSource: ds.cloneWithRows(sourceData.data.children),
                isLoading: false
            });
        })
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={rowData => {
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

export default ScrollList
