import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
} from '@shoutem/ui';

import {Modal, Animated, ScrollView,} from 'react-native';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue : 1,                   // Animate to opacity: 1 (opaque)
                duration: 1000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let {fadeAnim} = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


class Album extends Component {
    render() {
        var h = require('Dimensions').get('window').height;
        var w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        console.log(y)

        return (
            <Modal style={{backgroundColor: '#000'}}>
                <FadeInView>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{height: h, width: w}}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                height: w / width * (source[index].height / source[index].width) * width > h ? w / width * (source[index].height / source[index].width) * width : h,
                                width : w
                            }}
                        >
                            <Animated.Image
                                style={{
                                    width          : width,
                                    height         : height,
                                    top            : y,
                                    left           : x,
                                    position       : 'absolute',
                                    backgroundColor: 'red',
                                    transform      : [{
                                        matrix: [
                                            w / width, 0, 0, 0,
                                            0, w / width * (source[index].height / source[index].width), 0, 0,
                                            0, 0, 1, 0,
                                            // 图片高度小于屏幕高度时
                                            // w / 2 - (x + width / 2), h / 2 - (y + height / 2), 0, 1,
                                            // 图片高度大于屏幕高度时
                                            w / 2 - (x + width / 2), (w / width * (source[index].height / source[index].width) * width) / 2 - (y + height / 2), 0, 1,
                                        ]
                                    }],
                                }}
                                source={{
                                    cache     : 'force-cache',
                                    resizeMode: 'contain',
                                    uri       : source[index].uri,
                                }}
                            />
                        </ScrollView>
                        <ScrollView
                            style={{
                                height: h,
                                width : w,
                            }}
                        >
                            <Animated.Image
                                style={{
                                    height: h,
                                    width : w,
                                }}
                                source={{
                                    cache     : 'force-cache',
                                    resizeMode: 'contain',
                                    uri       : source[0].uri,
                                }}
                            />
                        </ScrollView>
                    </ScrollView>
                </FadeInView>
                {/*<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>*/}
                {/*<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>*/}
                {/*</FadeInView>*/}
            </Modal>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})