var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generate Message',() => {
    it('should generate correct message object',() => {
        //store res in var
        var from  = 'Admin';
        var text = "hello";
        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});

describe('generate location message',() =>{
    it('should generate correct location object',() =>{
        var from = 'Admin';
        var latitude = 1;
        var longitude = 1;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from,latitude,longitude);


        expect(message.url).toBe(url);
        expect(typeof message.createdAt).toBe('number');
    });
})