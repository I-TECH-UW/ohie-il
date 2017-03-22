var client={
    'clientID': 'OpenInfoManClientID',
    'name': 'OpenInfoMan',
    'roles': ['ILR'],
    'passwordAlgorithm': 'sha512',
    'passwordSalt': 'd9bcb40eae65478f962e5e5e5e7d0a02',
'passwordHash':'471942A35CAF9257F25440EB573300EAFD2736CA50A019500F871CF9E025558F175E8E6914A69D8DCF2AC8B0CB78ACB5CC2814EA4DD6412048DE7895D2452178'
}, channel={
    'name': 'Interlinked Registry',
    'urlPattern': '/ILR||/static',
    'allow': ['OpenInfoManClientID'],
    'routes': {
        'name': 'Route name',
        'primary': true,
        'host': 'localhost',
        'port': 8984,
        'secured': true,
        'forwardAuthHeader': true,
        'password': 'openinfoman'
    }
};

db.clients.insert(client);
db.channels.insert(channel);
