export const toTenantModel = (response = { Models: [] }) =>
    response.Models.map((model) => {
        return {
            id: model.tenantId,
            displayName: model.tenantName,
            role: model.roles.includes("admin") ? "Admin" : "Read Only",
        };
    });

export const toAlertingStatusModel = (response = {}) => {
    return {
        jobState: response.jobState || "",
        isActive:
            typeof response.isActive === "undefined"
                ? false
                : response.isActive,
    };
};
