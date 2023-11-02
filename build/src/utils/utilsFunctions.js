"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObjectFromURLParamsAttributes = void 0;
const createObjectFromURLParamsAttributes = (url) => {
    const attributesObject = {};
    Array.from(Object.entries(url)).map(([key, value]) => {
        if (value === "true" || value === "false") {
            attributesObject[key] = value === "true";
        }
        else {
            try {
                attributesObject[key] = JSON.parse(value);
            }
            catch (error) {
                attributesObject[key] = {};
            }
        }
    });
    return attributesObject;
};
exports.createObjectFromURLParamsAttributes = createObjectFromURLParamsAttributes;
