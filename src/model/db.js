export function connectToDb()
{
    let request = window.indexedDB.open("kattebel", 1);

    request.onerror = (event) => {
        console.log("Database error: ", event.target.error)
    };

    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        db.createObjectStore("reminders", {
            keyPath: "id"
        })
    };

    return request
}