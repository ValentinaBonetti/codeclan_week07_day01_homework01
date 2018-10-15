const PubSub = {
  // the payload is the data that we are moving around:
  publish: function(channel,payload){
    // let's see what's happening:
    console.log(`published on channel: ${channel}. Payload: ${payload}.`);
    // we can use the browser-predefined CustomEvent:
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel,callback){
    // let's see what's happening:
    console.log(`subscribed to channel: ${channel}.`);
    // when something happens in the channel, execute the callback:
    document.addEventListener(channel,callback);
  }
};

module.exports = PubSub;
