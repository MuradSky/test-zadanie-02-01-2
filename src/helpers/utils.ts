export const formatDateWithTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};
