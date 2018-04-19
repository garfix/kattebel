export const REMINDERS = "reminders";

export function connectToDb()
{
    const REMINDERS = "reminders";

    return new Promise((resolve, reject) => {

        let request = window.indexedDB.open("kattebel", 2);

        request.onerror = event => {
            reject("Database error: " + event.target.error)
        };

        request.onupgradeneeded = event => {

            let db = event.target.result;
            let transaction = event.target.transaction;

            if (event.oldVersion < 1) {
                db.createObjectStore(REMINDERS, {
                    keyPath: "id"
                }).createIndex("date_index", "date", { unique: false })
            }

            if (event.oldVersion < 2) {
                transaction.objectStore(REMINDERS)
                    .createIndex("id_index", "id", { unique: true })
            }
        };

        request.onsuccess = event => {
            resolve(event.target.result)
        }
    });
}

export function connectToObjectStore(db, storeName, transactionMode)
{
    return db
        .transaction(storeName, transactionMode)
        .objectStore(storeName)
}
