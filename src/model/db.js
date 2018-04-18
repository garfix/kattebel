export function connectToDb()
{
    const REMINDERS = "reminders";

    let request = window.indexedDB.open("kattebel", 2);

    request.onerror = event => {
        console.log("Database error: ", event.target.error)
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

    return request
}