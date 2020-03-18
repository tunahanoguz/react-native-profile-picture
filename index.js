import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const ProfilePicture = (props) => {
    const {
        isPicture,
        requirePicture,
        URLPicture,
        pictureResizeMode,
        user,
        width,
        height,
        shape,
        pictureStyle,
        backgroundColor,
        userTextColor,
        userTextStyle,
        userContainerStyle,
    } = props;

    const getFirstLetters = () => {
        const firstLetters = [];
        const words = user.split(' ');

        words.map(word => firstLetters.push(word[0]));

        return firstLetters.map(firstLetter => firstLetter);
    };

    if (isPicture) {
        return (
            <Image
                source={requirePicture !== null ? requirePicture : {uri: URLPicture}}
                style={[
                    {width, height, resizeMode: pictureResizeMode},
                    shape === 'circle' && {borderRadius: 100},
                    shape === 'rounded' && {borderRadius: 15},
                    pictureStyle,
                ]}
            />
        );
    } else {
        return (
            <View
                style={[
                    shape === 'circle' && {borderRadius: 100},
                    shape === 'rounded' && {borderRadius: 15},
                    {
                        width,
                        height,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor,
                        userContainerStyle,
                    },
                ]}>
                {user && <Text style={[{fontSize: 16, color: userTextColor}, userTextStyle]}>{getFirstLetters()}</Text>}
            </View>
        );
    }
};

ProfilePicture.defaultProps = {
    requirePicture: null,
    URLPicture: null,
    pictureResizeMode: 'cover',
    user: null,
    width: 50,
    height: 50,
    shape: 'circle',
    pictureStyle: null,
    backgroundColor: 'indigo',
    userTextColor: 'white',
    userTextStyle: null,
    userContainerStyle: null,
};

ProfilePicture.propTypes = {
    isPicture: PropTypes.bool.isRequired,
    requirePicture: PropTypes.number,
    URLPicture: PropTypes.string,
    pictureResizeMode: PropTypes.string,
    user: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    shape: PropTypes.string,
    pictureStyle: PropTypes.object,
    backgroundColor: PropTypes.string,
    userTextColor: PropTypes.string,
    userTextStyle: PropTypes.string,
    userContainerStyle: PropTypes.object,
};

export default ProfilePicture;
