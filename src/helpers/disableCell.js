export const disableCell = (event, disableClass) => {
    event.currentTarget.className += `${" "}${disableClass}`;
};
