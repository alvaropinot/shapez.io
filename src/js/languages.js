/**
 * @type {Object<string, {name: string, data: any, code: string, region: string}>}
 */
export const LANGUAGES = {
    "en": {
        name: "English",
        data: null,
        code: "en",
        region: "",
    },
    "de": {
        name: "Deutsch",
        data: require("./built-temp/base-de.json"),
        code: "de",
        region: "",
    },
    "fr": {
        name: "Français",
        data: require("./built-temp/base-fr.json"),
        code: "fr",
        region: "",
    },
    "pt-BR": {
        name: "Português (Brasil)",
        data: require("./built-temp/base-pt-BR.json"),
        code: "pt",
        region: "BR",
    },
    "cs": {
        name: "Čeština",
        data: require("./built-temp/base-cz.json"),
        code: "cs",
        region: "",
    },
    "es-419": {
        name: "Español (Latinoamérica)",
        data: require("./built-temp/base-es.json"),
        code: "es",
        region: "419",
    },
    "pl": {
        name: "Polski",
        data: require("./built-temp/base-pl.json"),
        code: "pl",
        region: "",
    },
};
