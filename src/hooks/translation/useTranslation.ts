import {useTranslation as useTranslationI18n} from "react-i18next";

import useTranslationType from "./useTranslation.type";

const useTranslation = (): useTranslationType => {
    const { t, i18n } = useTranslationI18n();
    return {t, config: i18n};
}

export default useTranslation;