import {FC} from "react";
import Language from "../../domain/types/Language.type";

type Props = {
    selectedLanguage: Language,
    languages: Language[],
    t:any,
    handleSelectLanguage: (lang:string)=>void
}

const LanguageSwitcherPresenter:FC<Props> = props => {
    const { selectedLanguage, t, languages, handleSelectLanguage } = props;
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

export default LanguageSwitcherPresenter;