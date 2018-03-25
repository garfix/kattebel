// react-router-dom
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/philosophy.md

// The .htaccess file takes care that /kattebel/add is handled by the script on /kattebel

export function getRoute(path)
{
    return process.env.PUBLIC_URL + path;
}
