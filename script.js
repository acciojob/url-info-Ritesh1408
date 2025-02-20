function getLength() {
    let str = window.location.href; // Get the current page URL
    return str.length; // Return the length of the URL
}

alert(`The length of the URL is: ${getLength()}`);
