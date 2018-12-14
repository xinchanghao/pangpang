import asyncComponent from './AsyncComponentFn'

export const AsyncComponent = (path)=>{
    return (
        asyncComponent(() => import('../pages/'+path))
    )
};
