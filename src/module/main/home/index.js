import React, {Component} from 'react';
import {
    View,
    Tile,
    Subtitle,
    ImageBackground,
    Title,
    NavigationBar,
    Divider,
    Button,
    Text,
    Spinner,
    Row,
    ListView,
    Card,
    Image,
    Caption,
    InlineGallery,
} from '@shoutem/ui';
import Screen from 'component/Screen';

import Icon from 'react-native-vector-icons/Ionicons';
import {UltimateListView} from "react-native-ultimate-listview";

import Inject from 'module';

import Css from './css';
// import EStyleSheet from 'react-native-extended-stylesheet';
// const Css = EStyleSheet.create({
//     jiugongge    : {
//         // flexWrap       : 'wrap',
//         flexDirection  : 'row',
//         // justifyContent : 'space-between',
//         backgroundColor: "darkgray",
//         marginTop      : 20,
//         height         : 40
//     },
//     jiugonggeItem: {
//         width          : '20px',
//         flex           : 1,
//         height         : '20px',
//         backgroundColor: "darkcyan",
//         margin         : 5
//     }
// });


import Model from 'model/main/home';

class Home extends Component {
    sleep = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            //This is required to determinate whether the first loading list is all loaded.
            let pageLimit = 24;
            // if (this.state.layout === 'grid') pageLimit = 60;
            let skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`);

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 10) {
                rowData = [];
            }

            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(2000);
            startFetch([
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
            ], pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };

    renderItem = (restaurant, index, separator) => {
        return (
            <Card style={{width: "auto", margin: 8}}>
                <View styleName="horizontal space-between">
                    <View styleName="horizontal h-start">
                        <Image styleName="small-avatar" source={{uri: restaurant.image.url}}/>
                        <Subtitle style={{paddingLeft: 8, paddingBottom: 2}}>卖萌的小怪</Subtitle>
                    </View>
                    <View styleName="horizontal h-end">
                        <Image styleName="small-avatar" source={{uri: restaurant.image.url}}/>
                    </View>
                </View>
                <View>
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal" numberOfLines={4}>{restaurant.address}</Subtitle>
                    </Tile>
                </View>
                <View>
                    <Image
                        styleName="large-wide"
                        source={{uri: restaurant.image.url}}
                        style={{width: "auto"}}
                    />
                </View>
                <View style={Css._jiugongge}>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            source={{uri: restaurant.image.url}}
                            styleName="medium-square"
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            source={{uri: restaurant.image.url}}
                            styleName="medium-square"
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                    <View style={Css._jiugonggeItem}>
                        <Image
                            styleName="medium-square"
                            source={{uri: restaurant.image.url}}
                        />
                    </View>
                </View>
                <Divider styleName="line"/>
                <View styleName="horizontal space-between">
                    <Caption>1 hour ago</Caption>
                    <Caption>15:34</Caption>
                </View>
            </Card>
        );
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{uri: restaurant.image.url}}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line"/>
            </View>
        );
    };

    render() {
        const {test, state: {name}} = this.props;
        return (
            <Screen>
                <NavigationBar
                    leftComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-menu" color="#ffffff"/>
                        </Button>
                    )}
                    centerComponent={<Title style={{
                        fontSize  : 24,
                        height    : 24,
                        minWidth  : 200,
                        textAlign : 'center',
                        lineHeight: 28,
                    }}>DIG-微忆</Title>}
                    rightComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-add" color="#ffffff"/>
                        </Button>
                    )}
                    styleName='clear inline no-border'
                    style={{container: {paddingTop: 26, height: 68, backgroundColor: '#FA729B'}}}
                />

                <UltimateListView
                    onFetch={this.onFetch}
                    item={this.renderItem}
                    refreshableMode="advanced"
                    keyExtractor={(item, index) => `${index}`}
                    displayDate
                    // customRefreshView={(a, b, c) => {
                    //     console.log(a, b, c);
                    // }}
                />
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home', component: Home, model: Model});