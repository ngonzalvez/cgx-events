describe('Events library', () => {
  it('should expose an emit function', () => {
    expect(emit).to.be.a('function');
  }),

  it('should expose an "on" function', () => {
    expect(on) .to.be.a('function');
  });

  it('calling the "on" function should register an event listener', () => {
    let eventEmitted = false;

    on('test', () => eventEmitted = true);
    dispatchEvent(new Event('test'));

    expect(eventEmitted).to.equal(true);
  });

  it('calling the "emit" function should emit an event', () => {
    let eventEmitted = false;

    on('test', () => eventEmitted = true);
    emit('test');

    expect(eventEmitted).to.equal(true);
  });

  it('data should equal passed along with events', () => {
    const data = { test: true };
    let received;

    on('test', receivedData => {
      received = receivedData;
    });
    emit('test', data);

    expect(received).to.be.a('object');
    expect(received.test).to.equal(true);
  });
});
