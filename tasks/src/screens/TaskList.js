import React, { Component } from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import lang from "../../lang/lang";
import commonStyles from "../commonStyles.json";
import todayImage from "../../assets/imgs/today.jpg";
import getTime from "../getTime";

import Task from "../components/Task";
import AddTask from "./AddTask";

const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

export default class TaskList extends Component {
    state = {
        ...initialState
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    }

    addTask = newTask => {
        if (!newTask.desc.trim()) {
            Alert.alert(lang.main.newTask.failure.title, lang.main.newTask.failure.desc);
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        });

        this.setState({ tasks }, this.filterTasks);
    }

    filterTasks = () => {
        let visibleTasks = null;

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            visibleTasks = [...this.state.tasks].filter(t => t.doneAt === null);
            // const pending = task => task.doneAt === null;
            // visibleTasks = this.state.tasks.filter(pending);
        }

        this.setState({ visibleTasks });
        AsyncStorage.setItem("tasks", JSON.stringify(this.state));
    }

    get isEmpty() {
        return this.state.visibleTasks.length === 0;
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem("tasks");
        const state = JSON.parse(stateString) || initialState;
        this.setState(state, this.filterTasks);
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date();
            }
        });

        this.setState({ tasks }, this.filterTasks);
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(t => t.id !== id);
        this.setState({ tasks }, this.filterTasks);
    }

    render() {
        const today = getTime();
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({ showAddTask: false })} onSave={this.addTask} />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter} style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={styles.iconBarText}>{this.state.showDoneTasks ? lang.main.iconBar.all : lang.main.iconBar.filtered}</Text>
                            <Icon name={this.state.showDoneTasks ? "eye" : "eye-slash"} size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{lang.main.date.today}</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <View style={!this.isEmpty ? styles.hidden : {paddingVertical: 30}}>
                        <MaterialIcon size={45} style={{textAlign: "center", color: commonStyles.colors.mainText}}>search_off</MaterialIcon>
                        <Text style={styles.emptyTitle}>{lang.main.task.empty.title}</Text>
                        <Text style={styles.emptyDesc}>{lang.main.task.empty.desc}</Text>
                    </View>
                    <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ showAddTask: true })} activeOpacity={0.7}>
                    <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    background: {
        flex: 3,
        padding: 20
    },
    emptyTitle: {
        textAlign: "center",
        fontFamily: commonStyles.fonts.title,
        fontSize: 25,
        color: commonStyles.colors.mainText
    },
    emptyDesc: {
        textAlign: "center",
        fontFamily: commonStyles.fonts.desc,
        fontStyle: "italic",
        fontSize: 16
    },
    hidden: {
        display: "none"
    },
    taskList: {
        flex: 7,
        paddingTop: 30,
        paddingHorizontal: 15
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: commonStyles.fonts.title,
        color: commonStyles.colors.secondary,
        fontSize: 50
    },
    subtitle: {
        fontFamily: commonStyles.fonts.subtitle,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    },
    iconBar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: Platform.OS === "ios" ? 30 : 0
    },
    iconBarText: {
        marginRight: 15,
        fontFamily: commonStyles.fonts.button,
        fontWeight: "bold",
        color: commonStyles.colors.secondary,
        fontSize: 16
    },
    addButton: {
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: commonStyles.colors.today,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
});
