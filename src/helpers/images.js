function importAll(r) {
    const images = {};
    r.keys().map((item) => {
        images[item.toLocaleLowerCase().replace('./', '').replace(/\.[^.]*$/, '')] = r(item);
        return images;
    });
    return images;
}

const images = importAll(require.context('@/assets/images', false, /\.(png|jpe?g|svg)$/));

export default images;
