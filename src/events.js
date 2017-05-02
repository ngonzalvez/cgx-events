function emit(name, data) {
    dispatchEvent(new CustomEvent(name, { detail: data }));
};

function on(name, fn) {
    addEventListener(name, function(evt) { fn(evt.detail) });
};

