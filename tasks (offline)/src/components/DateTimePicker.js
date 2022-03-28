import React, { Component } from "react";
import { Button } from "react-native";

import DatePicker from "react-native-date-picker";
import commonStyles from "../commonStyles.json";
import lang from "../../lang/lang";

export default class DateTimePicker extends Component {
    state = {
        date: new Date(),
        open: false
    }

    setDate = date => {
        this.setState({ date });
    }

    setOpen = open => {
        this.setState({ open });
    }

    render() {
        return (
            <DatePicker
                date={this.state.date}
                onDateChange={this.setDate}
                mode="date"
                minimumDate={new Date()}
                locale={lang.langMin}
                fadeToColor={commonStyles.backgrounds.secondary}
            />
        );
    }
}
