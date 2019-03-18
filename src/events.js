window.emit = (name, data) =>
    dispatchEvent(new CustomEvent(name, { detail: data }));

window.on = (name, fn) =>
    addEventListener(name, evt => fn(evt.detail));

