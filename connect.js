function connectDatabase(){
    import { createClient } from 'redis';
    const client = createClient();
    client.on('error', err => document.write('Redis Client Error', err));
    await client.connect();
}
document.getElementById('user').onClick = connectDatabase;
document.getElementById('inventory').onClick = connectDatabase;
document.getElementById('user').onClick = function() {
    window.location.href = 'login_page.html';
}
document.getElementById('inventory').onClick = function() {
    window.location.href = 'inventory_manager.html';
}