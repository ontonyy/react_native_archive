export const checkAndGetImageUrl = (url) => {
    const defaultLogoUrl =
        'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';
    if (!url) return defaultLogoUrl;
    else {
        const pattern = new RegExp(
            '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
            'i'
        );
        if (!pattern.test(url)) {
            return defaultLogoUrl;
        };
        return url;
    }
};
