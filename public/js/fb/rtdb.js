import { Database, DBROOT } from "/js/fb/init.js";
import * as FirebaseDb from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

export const set = (key, data={}, onSet) => {
    FirebaseDb.set(FirebaseDb.ref(Database, DBROOT + "/" + key), data).then(() => {
        onSet && onSet();
    }).catch((error) => {
        console.error(`fbrtdb.js: set(): ${error}`);
    });
}

export const update = (key, data={}, onUpdate) => {
    FirebaseDb.update(FirebaseDb.ref(Database, DBROOT + "/" + key), data).then(() => {
        onUpdate && onUpdate();
    }).catch((error) => {
        console.error(`fbrtdb.js: update(): ${error}`);
    });
}

export const get = (key, onGet) => {
    FirebaseDb.get(FirebaseDb.child(FirebaseDb.ref(Database), DBROOT + "/" + key)).then((snapshot) => {
        if (!onGet) return;
        if (snapshot.exists()) onGet(snapshot);
        else {
            console.error(`fbrtdb.js: get(): empty snapshot for '${key}'`);
            onGet(null);
        }
    }).catch((error) => {
        console.error(`fbrtdb.js: get(): ${error}`);
    });
}

export const remove = (key, onRemove) => {
    get(key, (data) => {
        FirebaseDb.set(FirebaseDb.ref(Database, DBROOT + "/" + key), null).then(() => {
            onRemove && onRemove(data);
        }).catch((error) => {
            console.error(`fbrtdb.js: remove(): ${error}`);
        });
    });
}
