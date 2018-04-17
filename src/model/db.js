export function connectToDb()
{
    const REMINDERS = "reminders";

    let request = window.indexedDB.open("kattebel", 1);

    request.onerror = (event) => {
        console.log("Database error: ", event.target.error)
    };

    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        if (event.oldVersion < 1) {
            db.createObjectStore(REMINDERS, {
                keyPath: "id"
            }).createIndex("date_index", "date", { unique: false })
        }


    };

    return request
}