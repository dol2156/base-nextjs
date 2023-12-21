
import dynamic from 'next/dynamic';
const ComponentList = {};
ComponentList.alert = [];
    ComponentList.alert.push({
      경로 : '@/components/alert/Alert_1',
      컴포넌트 : dynamic(() => import('@/components/alert/Alert_1'), { ssr : false }),
    });
    
    ComponentList.alert.push({
      경로 : '@/components/alert/Confirm_1',
      컴포넌트 : dynamic(() => import('@/components/alert/Confirm_1'), { ssr : false }),
    });
    
    ComponentList.alert.push({
      경로 : '@/components/alert/SelectOption_1',
      컴포넌트 : dynamic(() => import('@/components/alert/SelectOption_1'), { ssr : false }),
    });
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
    ComponentList.common = [];
    ComponentList.common.push({
      경로 : '@/components/common/Badge_1',
      컴포넌트 : dynamic(() => import('@/components/common/Badge_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/DescList_1',
      컴포넌트 : dynamic(() => import('@/components/common/DescList_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/Divider_1',
      컴포넌트 : dynamic(() => import('@/components/common/Divider_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/DungDung_1',
      컴포넌트 : dynamic(() => import('@/components/common/DungDung_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/EmptyList_1',
      컴포넌트 : dynamic(() => import('@/components/common/EmptyList_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/LinkList_1',
      컴포넌트 : dynamic(() => import('@/components/common/LinkList_1'), { ssr : false }),
    });
    
    ComponentList.common.push({
      경로 : '@/components/common/PagingSet_1',
      컴포넌트 : dynamic(() => import('@/components/common/PagingSet_1'), { ssr : false }),
    });
    ComponentList.dropdown = [];
    ComponentList.dropdown.push({
      경로 : '@/components/dropdown/Dropdown_1',
      컴포넌트 : dynamic(() => import('@/components/dropdown/Dropdown_1'), { ssr : false }),
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
      경로 : '@/components/layout/Footer_2',
      컴포넌트 : dynamic(() => import('@/components/layout/Footer_2'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Header_1',
      컴포넌트 : dynamic(() => import('@/components/layout/Header_1'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Header_2',
      컴포넌트 : dynamic(() => import('@/components/layout/Header_2'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Nav_1',
      컴포넌트 : dynamic(() => import('@/components/layout/Nav_1'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Nav_1_sm',
      컴포넌트 : dynamic(() => import('@/components/layout/Nav_1_sm'), { ssr : false }),
    });
    
    ComponentList.layout.push({
      경로 : '@/components/layout/Nav_2',
      컴포넌트 : dynamic(() => import('@/components/layout/Nav_2'), { ssr : false }),
    });
    ComponentList.meta = [];
    ComponentList.meta.push({
      경로 : '@/components/meta/Head_1',
      컴포넌트 : dynamic(() => import('@/components/meta/Head_1'), { ssr : false }),
    });
    ComponentList.radiobutton = [];
    ComponentList.radiobutton.push({
      경로 : '@/components/radiobutton/RadioButtonList_1',
      컴포넌트 : dynamic(() => import('@/components/radiobutton/RadioButtonList_1'), { ssr : false }),
    });
    ComponentList.select = [];
    ComponentList.select.push({
      경로 : '@/components/select/SelectBox_1',
      컴포넌트 : dynamic(() => import('@/components/select/SelectBox_1'), { ssr : false }),
    });
    ComponentList.textinput = [];
    ComponentList.textinput.push({
      경로 : '@/components/textinput/FormMsg',
      컴포넌트 : dynamic(() => import('@/components/textinput/FormMsg'), { ssr : false }),
    });
    
    ComponentList.textinput.push({
      경로 : '@/components/textinput/TextInput_1',
      컴포넌트 : dynamic(() => import('@/components/textinput/TextInput_1'), { ssr : false }),
    });
    
    ComponentList.textinput.push({
      경로 : '@/components/textinput/Textarea_1',
      컴포넌트 : dynamic(() => import('@/components/textinput/Textarea_1'), { ssr : false }),
    });
    
export default ComponentList;
