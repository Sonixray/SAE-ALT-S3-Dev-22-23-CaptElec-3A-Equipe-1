/** eg. #000000 => true */
export const isValidHexColor = (color) => {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(color);
};

export const extendHex = (shortHex) => {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    return shortHex.replace(regex, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`);
};

/** eg. hex(123) => "7b" */
export const intToHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
};

/** eg. rgb("#FF0080") => { r: 256, g: 0, b: 128 } */
export const hexToRgb = (color) => {
    if (!isValidHexColor(color)) throw new Error('Invalid hex color');

    const extendedColor = extendHex(color);

    const hex = extendedColor.replace('#', '');
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
    };
};

/** eg. gradient(0.5, "#FF0000", "#0000FF") => "#800080" */
export const gradient = (ratio, color1, color2, via = null) => {
    if (
        !isValidHexColor(color1) ||
        !isValidHexColor(color2) ||
        (via && !isValidHexColor(via.color))
    )
        throw new Error('Invalid hex color');

    const normalRatio = Math.max(0, Math.min(1, ratio));
    if (via && normalRatio === via.ratio) return via.color;

    const from =
        via && normalRatio > via.ratio ? hexToRgb(via.color) : hexToRgb(color1);
    const to =
        via && normalRatio < via.ratio ? hexToRgb(via.color) : hexToRgb(color2);

    const r = Math.ceil(from.r * normalRatio + to.r * (1 - normalRatio));
    const g = Math.ceil(from.g * normalRatio + to.g * (1 - normalRatio));
    const b = Math.ceil(from.b * normalRatio + to.b * (1 - normalRatio));

    return `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
};
