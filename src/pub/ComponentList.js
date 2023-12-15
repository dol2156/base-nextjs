
import dynamic from 'next/dynamic';
const ComponentList = {};
ComponentList.etc = [];
    ComponentList.etc.push({
      경로 : '@/components/etc/AppInfo',
      컴포넌트 : dynamic(() => import('@/components/etc/AppInfo'), { ssr : false }),
    });
    
    ComponentList.etc.push({
      경로 : '@/components/etc/SiteMapLink',
      컴포넌트 : dynamic(() => import('@/components/etc/SiteMapLink'), { ssr : false }),
    });
    ComponentList.layout = [];
    ComponentList.layout.push({
      경로 : '@/components/layout/Footer_1',
      컴포넌트 : dynamic(() => import('@/components/layout/Footer_1'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Header_1',
      컴포넌트 : dynamic(() => import('@/components/layout/Header_1'), { ssr : false }),
    });
    ComponentList.meta = [];
    ComponentList.meta.push({
      경로 : '@/components/meta/Head_1',
      컴포넌트 : dynamic(() => import('@/components/meta/Head_1'), { ssr : false }),
    });
    
export default ComponentList;
