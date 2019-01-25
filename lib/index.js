'use strict';

const _authorization = require('./authorization');
const _accounts = require('./accounts');
const _balances = require('./balances');
const _positions = require('./positions');
const _liveOrders = require('./liveOrders');
const _history = require('./history');

let _headers = require('../util/defaultHeaders');

let _user = {
    username: null,
    password: null,
    authorization_token: null,
    accounts: []
};

module.exports = {
    setUser: user => {
        _user = {
            ..._user,
            ...user
        };
    },
    getUser: () => {let tempUser = _user; tempUser.password = "*********"; return tempUser;},
    setAuthorizationToken: (authorization_token) => _user.authorization_token = _headers['Authorization'] = authorization_token,
    getHeaders: () => _headers,

    authorization: () => _authorization(_user.username, _user.password, _headers),
    accounts: () => _accounts(_headers),
    balances: (account_id) => _balances(_headers, account_id),
    positions: (account_id) => _positions(_headers, account_id),
    liveOrders: (account_id) => _liveOrders(_headers, account_id),
    history: (account_id, start_date, end_date) => _history(_headers, account_id, start_date, end_date)
}
