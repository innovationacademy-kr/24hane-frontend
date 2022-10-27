import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "utils/cookie";

type ProtectedRouteProps = {
  children: ReactElement;
  redirectPath: string;
  authIsRequired: boolean;
};
/**
 * @param authIsRequired children컴포넌트가 auth가 필요한지 여부
 * @param redirectPath auth 조건에 맞지 않을때 리다이렉트 될 경로
 * @param children Route path에 따라 렌더링 될 컴포넌트
 * @returns 라우팅 된 컴포넌트
 */

export const ProtectedRoute = ({ authIsRequired, redirectPath, children }: ProtectedRouteProps) => {
  const token = getAccessToken();

  if (!!token === authIsRequired) return children;
  else return <Navigate to={redirectPath} />;
};
