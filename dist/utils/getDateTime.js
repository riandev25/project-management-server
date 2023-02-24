"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateTime = void 0;
const getDateTime = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedTime = today.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    return { formattedDate, formattedTime };
};
exports.getDateTime = getDateTime;
