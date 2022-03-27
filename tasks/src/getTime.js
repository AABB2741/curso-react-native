import lang from "../lang/lang";

import moment from "moment";
import "moment/locale/pt-br";
import "moment/locale/en-ca";

export default function (date) {
    return moment(date).locale(lang.lang).format(lang.format.moment);
}
