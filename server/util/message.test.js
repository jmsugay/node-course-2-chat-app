var expect = require('expect');

var generateMessage = require('./message');

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