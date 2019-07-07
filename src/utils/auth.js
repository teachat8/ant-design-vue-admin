/**
 * 用户的权限校验
 */
const currentAuth = ["admin"];
export { currentAuth };

//  后台获取的用户权限
 export function getCurrentAuthority() {
   return currentAuth;
 }

// 校验权限
 export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
 }

//  判断登录权限
 export function isLogin() {
   const current = getCurrentAuthority();
   return current && current[0] !== "guest";
 }
