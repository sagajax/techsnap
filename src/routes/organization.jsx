import { Route, Routes } from "react-router-dom";
import OrganizationLayout from "@/organization/layout";
import OrganizationCreation from "@/organization/OrganizationCreation";

export default function OrganizationRoutes() {
  return (
    <Routes>
      <Route path="/organization" element={<OrganizationLayout />}>
        <Route path="create" element={<OrganizationCreation />} />
      </Route>
    </Routes>
  );
}
