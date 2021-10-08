import {FC, useEffect, useState} from "react";
import FlagMex from './../../resources/assets/media/flag_mex.jpg';
import FlagUSA from './../../resources/assets/media/flag_usa.jpg';
import useTranslation from "../../utils/hooks/translation/useTranslation";

type Language = {
    id: string,
    flagImage: any,
}
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
        <>
            <div className="absolute z-10 w-full flex justify-end ">

                <div className="dropdown inline-block relative">
                    <button className="py-2 px-4 rounded inline-flex flex items-center ">
                        <Option {...selectedLanguage} lang={t(selectedLanguage.id)}/>
                    </button>
                    <ul className="dropdown-menu absolute hidden pt-1">
                        {
                            languages.map((lang: Language,key: number)=>(
                                <li key={`langOption-${key}`} onClick={(e:any)=>handleSelectLanguage(lang.id)}>
                                    <Option {...lang} lang={t(lang.id)}/>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        </>
    );
}

type OptionProp = {
    id: string,
    lang:string,
    flagImage: any,
}
const Option:FC<OptionProp> = props => {
    return (
        <div className={'flex gap-2 mb-2'}>
            <img src={props.flagImage} alt={props.lang} className={'h-5 w-auto '}/>
            <p>{props.lang}</p>
        </div>
    );
}

export default LanguageSwitcher;