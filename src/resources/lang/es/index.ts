import labels from "./labels";
import languages from "./languages";
import schemas from "./schemas";

const ES = {
    translation: {
        ...labels,
        ...languages,
        ...schemas
    }
}
export default ES;