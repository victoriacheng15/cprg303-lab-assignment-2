import React from "react";
import {Button, Image, Text, View} from "react-native";
import {fruitStyles} from "../utils/FruitStyles";
import {router} from "expo-router";

export default function ApplePage() {
    return (
        <View>
            <Button title="return to main page"
                    onPress={() => router.push("/")}
            />
            <Text>
                Mango image
            </Text>
            <Image
                source={{uri: "https://www.kochschule.de/sites/default/files/images/kochwissen/419/mango.jpg"}}
                style={fruitStyles.image}
                >
            </Image>
        </View>
    )
}