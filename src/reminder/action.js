export function addReminder(id, date, time, description) {

    return {
        type: "ADD_REMINDER",
        id, date, time, description
    }
}
