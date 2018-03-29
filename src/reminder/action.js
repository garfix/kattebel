export function addReminder(id, date, time, description) {

    console.log('Added!');

    return {
        type: "ADD_REMINDER",
        id, date, time, description
    }
}
