
import dynamic from 'next/dynamic';
const ComponentList = {};
ComponentList.bottom_sheet = [];
    ComponentList.bottom_sheet.push({
      경로 : '@/components/bottom_sheet/BottomSheet_1',
      컴포넌트 : dynamic(() => import('@/components/bottom_sheet/BottomSheet_1'), { ssr : false }),
    });
    
    ComponentList.bottom_sheet.push({
      경로 : '@/components/bottom_sheet/BottomSheet_2',
      컴포넌트 : dynamic(() => import('@/components/bottom_sheet/BottomSheet_2'), { ssr : false }),
    });
    ComponentList.checkbox = [];
    ComponentList.checkbox.push({
      경로 : '@/components/checkbox/CheckboxList_1',
      컴포넌트 : dynamic(() => import('@/components/checkbox/CheckboxList_1'), { ssr : false }),
    });
    
    ComponentList.checkbox.push({
      경로 : '@/components/checkbox/ToggleButton_1',
      컴포넌트 : dynamic(() => import('@/components/checkbox/ToggleButton_1'), { ssr : false }),
    });
    ComponentList.etc = [];
    ComponentList.etc.push({
      경로 : '@/components/etc/AppInfo',
      컴포넌트 : dynamic(() => import('@/components/etc/AppInfo'), { ssr : false }),
    });
    
    ComponentList.etc.push({
      경로 : '@/components/etc/Modal',
      컴포넌트 : dynamic(() => import('@/components/etc/Modal'), { ssr : false }),
    });
    
    ComponentList.etc.push({
      경로 : '@/components/etc/SiteMapLink',
      컴포넌트 : dynamic(() => import('@/components/etc/SiteMapLink'), { ssr : false }),
    });
    ComponentList.footer = [];
    ComponentList.footer.push({
      경로 : '@/components/footer/BottomBtnBox_1',
      컴포넌트 : dynamic(() => import('@/components/footer/BottomBtnBox_1'), { ssr : false }),
    });
    
    ComponentList.footer.push({
      경로 : '@/components/footer/BottomNavi_1',
      컴포넌트 : dynamic(() => import('@/components/footer/BottomNavi_1'), { ssr : false }),
    });
    ComponentList.header = [];
    ComponentList.header.push({
      경로 : '@/components/header/TopActionBar_1',
      컴포넌트 : dynamic(() => import('@/components/header/TopActionBar_1'), { ssr : false }),
    });
    ComponentList.layerpop = [];
    ComponentList.layerpop.push({
      경로 : '@/components/layerpop/ToolTip_1',
      컴포넌트 : dynamic(() => import('@/components/layerpop/ToolTip_1'), { ssr : false }),
    });
    ComponentList.layout = [];
    ComponentList.layout.push({
      경로 : '@/components/layout/Aside_1',
      컴포넌트 : dynamic(() => import('@/components/layout/Aside_1'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/BottomRightUtil_1',
      컴포넌트 : dynamic(() => import('@/components/layout/BottomRightUtil_1'), { ssr : false }),
    });
    
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
