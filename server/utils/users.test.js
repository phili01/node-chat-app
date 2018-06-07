const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'phi',
            room: 'Node Course' 
        },{
            id: '2',
            name: 'jen',
            room: 'react course' 
        }, {
            id: '3',
            name: 'jul',
            room: 'Node Course' 
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'phi',
            room: 'the fan'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
       var userId = '1';
       var user = users.removeUser(userId);
     
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
      
         expect(user).toNotExist();
         expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

       expect(user).toNotExist();
    });

    it('should return names for node courses', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['phi', 'jul']);
    });

    it('should return names for react courses', () => {
        var userList = users.getUserList('react course');

        expect(userList).toEqual(['jen']);
    });
})