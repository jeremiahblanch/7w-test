export default 'Gold Digger.jpeg Liar.jpeg Little Women- LA.jpeg MKR.jpeg Pooch Perfect.jpeg Revolution.jpeg Smallville.jpeg The Good Doctor.jpeg The Resident.jpeg Transformed.jpeg'
    .split('.jpeg')
    .map(prefix => {
        let pt = prefix.trim();

        return !!pt && {
            id: pt,
            image: `${pt}.jpeg`,
            title: pt,
        };
    })
    .filter(prefix => !!prefix);
