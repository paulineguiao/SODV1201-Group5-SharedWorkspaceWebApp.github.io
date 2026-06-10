const WorkspaceAPI = {

    getUsers() {
        return users;
    },

    getProperties() {
        return properties;
    },

    getWorkspaces() {
        return workspaces;
    },

    getPropertyById(id) {
        return properties.find(
            property => property.id === id
        );
    },

    getWorkspaceById(id) {
        return workspaces.find(
            workspace => workspace.id === id
        );
    },

    createWorkspace(workspace) {
        workspaces.push(workspace);
    },

    deleteWorkspace(id) {

        const index =
            workspaces.findIndex(
                workspace =>
                workspace.id === id
            );

        if(index !== -1)
        {
            workspaces.splice(index, 1);
        }
    },

    deleteProperty(id) {

        const index =
            properties.findIndex(
                property =>
                property.id === id
            );

        if(index !== -1)
        {
            properties.splice(index, 1);
        }
    }
};