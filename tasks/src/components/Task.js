import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import { Swipeable } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

import getTime from "../getTime";

import commonStyles from "../commonStyles.json";
import lang from "../../lang/lang";

export default props => {
    const isDone = !(props.doneAt === null);
    const isDoneStyle = isDone ? { textDecorationLine: "line-through" } : {};
    const isDoneDesc = isDone ? {fontStyle: "italic"} : {};
    const date = props.doneAt || props.estimateAt;
    const formatedDate = getTime(date);

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
        );
    }

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Icon name="trash" size={20} color="#fff" style={styles.excludeIcon} />
                <Text style={styles.excludeText}>{lang.main.task.delete}</Text>
            </View>
        );
    }

    return (
        <Swipeable renderRightActions={getRightContent} renderLeftActions={getLeftContent} onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, isDoneStyle]}>{props.desc}</Text>
                    <Text style={[styles.date, isDoneDesc]}>
                        {isDone ? `${lang.main.task.doneAt} ` : ""}
                        <Text style={isDone ? {fontWeight: "bold", fontStyle: "italic"} : {}}>{formatedDate}</Text>
                    </Text>
                </View>
            </View>
        </Swipeable>
    );
}

function getCheckView(doneAt) {
    if (doneAt !== null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={15} color="#fff" />
            </View>
        );
    }

    return (
        <View style={styles.pending} />
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: commonStyles.backgrounds.primary,
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 15
    },
    checkContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#555"
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.accent,
        justifyContent: "center",
        alignItems: "center"
    },
    desc: {
        fontFamily: commonStyles.fonts.button,
        color: commonStyles.colors.mainText,
        fontWeight: "bold",
        fontSize: 15
    },
    date: {
        fontFamily: commonStyles.fonts.desc,
        fontSize: 12
    },
    right: {
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        marginBottom: 15,
        marginLeft: 15,
        borderRadius: 10
    },
    left: {
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 15,
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    excludeIcon: {
        marginLeft: 10
    },
    excludeText: {
        fontFamily: commonStyles.fonts.button,
        color: "#fff",
        fontSize: 20,
        margin: 10
    }
});
