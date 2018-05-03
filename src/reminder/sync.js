import {getReminders} from "./db";

export function syncReminders() {

    return new Promise((resolve, reject) => {

        getReminders().then(reminders => {
            console.log(reminders);

            let lastReminder = reminders[0];

            console.log(lastReminder.description);

            if (lastReminder.description === 'offline') {
                reject();
            } else {
                resolve(true);
            }
        }).catch(error => reject(error));
    });
}