import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setItem } from "../../core/services/common/storage/storage.service";
import { useUserAuth } from "../../core/utils/context/AuthenticationContext";
import { ComponentSpinner } from "../common/Spinner/LoadingSpinner";
import * as auth from "../../core/services/authentication/authentication.service";
import {
  useRegisterUserFromSSO,
  useUserRolesClaims,
} from "../../core/services/api/account.api";

const SigninOidc: React.FC = () => {
  const history = useHistory();
  const {
    setRoleState,
    setTokenState,
    setUserInfoState,
    setUserClaimState,
    userInfo,
  } = useUserAuth();

  const registerUserFromSSOMutation = useRegisterUserFromSSO();
  const getUserRolesMutation = useUserRolesClaims();

  useEffect(() => {
    async function signinAsync() {
      try {
        const result = await auth.loginCallback();

        const exp = new Date(result.expires_at * 1000);

        let role: string | string[] = result.profile.role
          ? result.profile.role
          : ["UserReal"]; // edit after more user types
        // // redirect user to home page

        // // check if its string when convert to string
        if (typeof role === "string") {
          role = [role];
        }

        const family = result.profile.family_name;
        // set user information in context

        setItem("refresh_token", result.refresh_token);
        auth.setLoggedUserInfoToStorage({
          ...userInfo,
          userName: result.profile.preferred_username,
          name: result.profile.name,
          family: family,
          userInfoId: +result.profile.UserInfoId,
          authTime: result.profile.auth_time,
          userType: +result.profile.UserType,
        });
        auth.setUserRoles(role);

        // const userClaim = await GetAllUserClaims();

        // setItem("user-claim", userClaim);
        // setUserClaimState(userClaim);
        console.log("access-- ", result.access_token);

        registerUserFromSSOMutation.mutate(result.access_token, {
          onSuccess: (val) => {
            getUserRolesMutation.mutate(result.access_token, {
              onSuccess: (val) => {
                console.log(val);
                let result2 = val.data.result;
                let role: string[] = [];
                console.log(val);
                if (result2.roles) {
                  result2.roles.forEach((row: any) => {
                    role.push(row.value);
                  });
                }

                if (result2.roles && result2.roles.length === 0) {
                  role.push("UserReal");
                }

                // redirect user to home page

                // check if its string when convert to string
                if (typeof role === "string") {
                  role = [role];
                }
                setRoleState(role);
                setTokenState(result.access_token);
                setUserInfoState((prev: any) => {
                  return {
                    ...prev,
                    userName: result.profile.preferred_username,
                    name: result.profile.name,
                    userType: +result.profile.UserType,
                    family: family,
                    userInfoId: +result.profile.UserInfoId,
                    authTime: result.profile.auth_time,
                  };
                });

                console.log(JSON.stringify(role));
                
                // set user information in local-storage
                setItem("token", result.access_token);
                setItem("roles", JSON.stringify(role));
                setItem("expiry", exp.getTime());
                history.push("/Dashboard");
              },
            });
          },
        });
      } catch (error) {
        // console.log(error);
      }
    }
    signinAsync();
  }, [history]);
  return <ComponentSpinner />;
};

export { SigninOidc };
