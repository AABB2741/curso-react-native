import React, { Component } from "react";
import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback, Dimensions, TouchableOpacity, TextInput, Platform } from "react-native";

import DatePicker from "react-native-date-picker";
import DateTimePicker from "../components/DateTimePicker";

import commonStyles from "../commonStyles.json";
import lang from "../../lang/lang";

const initialState = { desc: "", date: new Date() };

export default class AddTask extends Component {
    state = {
        ...initialState
    }

    getDateTimePicker = () => {
        // return <DateTimePickerAndroid value={this.state.date} onChange={(_, date) => this.setState({ date })} mode="date" />

        return (
            <View style={styles.dateTimePicker}>
                <DatePicker 
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    mode="date"
                    minimumDate={new Date()}
                    locale={lang.langMin}
                    fadeToColor={commonStyles.backgrounds.secondary}
                />
            </View>
        );
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        };

        this.props.onSave && this.props.onSave(newTask);
        // if (this.props.onSave) {
        //     this.props.onSave(newTask);
        // }

        this.setState({ ...initialState }); // Resetando
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={[styles.background, {flex: 3.5}]}>
                    <View style={styles.container}>
                        <Text style={styles.header}>{lang.main.newTask.title}</Text>
                        <TextInput style={styles.input} placeholder={lang.main.newTask.input} value={this.state.desc} onChangeText={desc => this.setState({ desc })} />
                        <Text style={styles.hint}>{lang.main.newTask.date_hint}</Text>
                        {this.getDateTimePicker()}
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={this.props.onCancel}>
                                <Text style={styles.button}>{lang.buttons.cancel}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.save}>
                                <Text style={[styles.button, styles.accentButton]}>{lang.buttons.save}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    container: {
        // flex: 1,
        backgroundColor: commonStyles.backgrounds.secondary,
        width: Dimensions.get("window").width - 60,
        marginLeft: 30,
        borderRadius: 15,
        overflow: "hidden"
    },
    header: {
        fontFamily: commonStyles.fonts.title,
        backgroundColor: commonStyles.colors.today,
        padding: 15,
        color: commonStyles.colors.secondary,
        textAlign: "center",
        fontSize: 18
    },
    hint: {
        fontFamily: commonStyles.fonts.input,
        fontSize: 18,
        color: commonStyles.colors.subText,
        paddingHorizontal: 15,
        paddingTop: 15
    },
    input: {
        fontFamily: commonStyles.fonts.input,
        fontWeight: "400",
        height: 40,
        padding: 5,
        margin: 15,
        backgroundColor: commonStyles.backgrounds.primary,
        borderRadius: 7
    },
    dateTimePicker: {
        alignItems: "center"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 15
    },
    button: {
        marginRight: 15,
        color: commonStyles.colors.today
    },
    accentButton: {
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    }
});
