# Event Dispatcher

The simplest ever event dispatcher in 127 bytes (minified).


### Motivation

In the search for reducing the size of the JS bundle, I started looking at all
the things that could be compressed/simplified in an MVC framework. And that's
when I realized that we don't need to implement a new events system because all
web browsers already have it built-in.

This library's only objective is to provide a simpler interface to trigger and
listen for events on client-side Javascript.


### Usage

You can listen for events this way:

~~~javascript
on('myCustomEvent', function(evt) {
    console.log('An event of type "myCustomEvent" was triggered');
});
~~~

And you can also trigger them:

~~~javascript
emit('myCustomEvent');
~~~

In case you are thinking: can I send data along with the event? The answer is
yes, very simply:

~~~javascript
emit('user:created', { name: 'John' });
~~~

And you can find the data object under the `detail` property of the event.

~~~javascript
on('user:created', function(user) {
    console.log('User created:', user.name);
});
~~~

