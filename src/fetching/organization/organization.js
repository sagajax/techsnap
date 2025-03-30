import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/workspace_service/api";

const createOrganization = async (name, description) => {
  const response = await axiosInstance.post(`${URL}/organizations/`, {
    name,
    description,
  });
  return response;
  //   we will get organization id in return
};

const createWorkSpace = async (name, description, organizationId) => {
  const response = await axiosInstance.post(`${URL}/workspaces/`, {
    name,
    description,
    organization: organizationId,
  });
  return response;
  //   we will get owner_id and organization  id in return ,, id is workspace id
};

const addUsertoWorkspace = async (user_id, workspaceId, role) => {
  const response = await axiosInstance.post(
    `${URL}/workspaces/${workspaceId}/userprofiles/`,
    {
      user_id,
      workspace: workspaceId,
      role,
    }
  );
  return response;
};

const getWorkSpaceMembers = async (workspaceId) => {
  const response = await axiosInstance.get(
    `${URL}/workspaces/${workspaceId}/userprofiles/`
  );
  return response;
};

export {
  createOrganization,
  createWorkSpace,
  addUsertoWorkspace,
  getWorkSpaceMembers,
};
