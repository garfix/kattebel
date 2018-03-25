export function addMemory(id, date, time, description) {

    console.log('Added!');

    return {
        type: "ADD_MEMORY",
        id, date, time, description
    }
}
