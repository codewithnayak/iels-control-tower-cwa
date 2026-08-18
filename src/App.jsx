import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Identity
import UsersList from "./pages/identity/users/UsersList";
import UsersAdd from "./pages/identity/users/UsersAdd";
import UsersEdit from "./pages/identity/users/UsersEdit";

import RolesList from "./pages/identity/roles/RolesList";
import RolesAdd from "./pages/identity/roles/RolesAdd";
import RolesEdit from "./pages/identity/roles/RolesEdit";

import StationsList from "./pages/police/StationsList";
import StationsAdd from "./pages/police/StationsAdd";
import StationsEdit from "./pages/police/StationsEdit";

import PermissionsList from "./pages/identity/permissions/PermissionsList";
import PermissionsAdd from "./pages/identity/permissions/PermissionsAdd";
import PermissionsEdit from "./pages/identity/permissions/PermissionsEdit";

import ScopesList from "./pages/identity/scope/ScopesList";
import ScopesAdd from "./pages/identity/scope/ScopesAdd";
import ScopesEdit from "./pages/identity/scope/ScopesEdit";

// // Court
import CourtroomsList from "./pages/court/courtrooms/CourtroomsList";
import CourtroomsAdd from "./pages/court/courtrooms/CourtroomsAdd";
import CourtroomsEdit from "./pages/court/courtrooms/CourtroomsEdit";

import JudgesList from "./pages/court/judges/JudgesList";
import JudgesAdd from "./pages/court/judges/JudgesAdd";
import JudgesEdit from "./pages/court/judges/JudgesEdit";

import HearingSlotsList from "./pages/court/hearings/HearingSlotsList";
import HearingSlotsAdd from "./pages/court/hearings/HearingSlotsAdd";
import HearingSlotsEdit from "./pages/court/hearings/HearingSlotsEdit";

// // Evidence
import EvidenceCategoriesList from "./pages/evidence/categories/EvidenceCategoriesList";
import EvidenceCategoriesAdd from "./pages/evidence/categories/EvidenceCategoriesAdd";
import EvidenceCategoriesEdit from "./pages/evidence/categories/EvidenceCategoriesEdit";

import RetentionPoliciesList from "./pages/evidence/retention/RetentionPoliciesList";
import RetentionPoliciesAdd from "./pages/evidence/retention/RetentionPoliciesAdd";
import RetentionPoliciesEdit from "./pages/evidence/retention/RetentionPoliciesEdit";

// // AI
import AiConfigList from "./pages/ai/config/AiConfigList";
import AiConfigAdd from "./pages/ai/config/AiConfigAdd";
import AiConfigEdit from "./pages/ai/config/AiConfigEdit";

import AiFeaturesList from "./pages/ai/features/AiFeaturesList";
import AiFeaturesAdd from "./pages/ai/features/AiFeaturesAdd";
import AiFeaturesEdit from "./pages/ai/features/AiFeaturesEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Identity */}
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/add" element={<UsersAdd />} />
        <Route path="/users/edit/:id" element={<UsersEdit />} />
        <Route path="/roles" element={<RolesList />} />
        <Route path="/roles/add" element={<RolesAdd />} />
        <Route path="/roles/edit/:id" element={<RolesEdit />} />

        <Route path="/stations" element={<StationsList />} />
        <Route path="/stations/add" element={<StationsAdd />} />
        <Route path="/stations/edit/:id" element={<StationsEdit />} />
        <Route path="/scopes" element={<ScopesList />} />
        <Route path="/scopes/add" element={<ScopesAdd />} />
        <Route path="/scopes/edit/:id" element={<ScopesEdit />} />
        <Route path="/permissions" element={<PermissionsList />} />
        <Route path="/permissions/add" element={<PermissionsAdd />} />
        <Route path="/permissions/edit/:id" element={<PermissionsEdit />} />
        <Route path="/courtrooms" element={<CourtroomsList />} />
        <Route path="/courtrooms/add" element={<CourtroomsAdd />} />
        <Route path="/courtrooms/edit/:id" element={<CourtroomsEdit />} />

        <Route path="/judges" element={<JudgesList />} />
        <Route path="/judges/add" element={<JudgesAdd />} />
        <Route path="/judges/edit/:id" element={<JudgesEdit />} />

        <Route path="/hearings" element={<HearingSlotsList />} />
        <Route path="/hearings/add" element={<HearingSlotsAdd />} />
        <Route path="/hearings/edit/:id" element={<HearingSlotsEdit />} />
        <Route
          path="/evidence-categories"
          element={<EvidenceCategoriesList />}
        />
        <Route
          path="/evidence-categories/add"
          element={<EvidenceCategoriesAdd />}
        />
        <Route
          path="/evidence-categories/edit/:id"
          element={<EvidenceCategoriesEdit />}
        />

        <Route path="/retention-policies" element={<RetentionPoliciesList />} />
        <Route
          path="/retention-policies/add"
          element={<RetentionPoliciesAdd />}
        />
        <Route
          path="/retention-policies/edit/:id"
          element={<RetentionPoliciesEdit />}
        />
        <Route path="/ai-config" element={<AiConfigList />} />
        <Route path="/ai-config/add" element={<AiConfigAdd />} />
        <Route path="/ai-config/edit/:id" element={<AiConfigEdit />} />

        <Route path="/ai-features" element={<AiFeaturesList />} />
        <Route path="/ai-features/add" element={<AiFeaturesAdd />} />
        <Route path="/ai-features/edit/:id" element={<AiFeaturesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
