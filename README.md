# Event Dispatcher

The simplest ever event dispatcher in 127 bytes (minified).


### Motivation

In the search for reducing the size of the JS bundle, I started looking at all
the things that could be compressed/simplified in an MVC framework. And that's
when I realized that we don't need to implement a new events system because all
web-browsers already have it built-in.

This library only objective is to provide a simple interface to trigger and
listen for events on client-side Javascript.


### Usage

You can listen for events this way:

~~~javascript
window.on('myCustomEvent', function(evt) {
    console.log('An event of type "myCustomEvent" was triggered');
});
~~~

And you can also trigger them:

~~~javascript
window.emit('myCustomEvent');
~~~

In case you are wondering, can I send data along with the event? The answer is
yes, very simple.

~~~javascript
window.emit('user:created', { name: 'John' });
~~~

And you can find it under the `detail` property of the event.

~~~javascript
window.on('user:created', function(user) {
    console.log('User created:', user.name);
});
~~~

