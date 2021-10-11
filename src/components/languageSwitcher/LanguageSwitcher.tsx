import {FC, useEffect, useState} from "react";
import FlagMex from './../../resources/assets/media/flag_mex.jpg';
import FlagUSA from './../../resources/assets/media/flag_usa.jpg';
import useTranslation from "../../hooks/translation/useTranslation";
import Language from "../../domain/types/Language.type";
import LanguageSwitcherPresenter from "./LanguageSwitcher.presenter";


const languages:Language[] = [
    {
        id: 'es',
        flagImage: FlagMex
    },
    {
        id: 'en',
        flagImage: FlagUSA
    }
];

const LanguageSwitcher:FC<any> = () => {
    const {t, config}= useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    
    useEffect(() => {
        setSelectedLanguage(getLanguageById(config.language));
    }, [config.language]);
    
    const getLanguageById = (id: string) => (languages.find((lang:Language)=>lang.id === id) || languages[0]);
    const handleSelectLanguage =  (id: string) => {
        setSelectedLanguage(getLanguageById(id));
        config.changeLanguage(id);
    }
    return (
        <LanguageSwitcherPresenter
            selectedLanguage={selectedLanguage}
            languages={languages}
            handleSelectLanguage={handleSelectLanguage}
            t={t}
        />
    );
}




export default LanguageSwitcher;