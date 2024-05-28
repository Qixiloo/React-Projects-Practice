import Tabs from "./tabs";

const tabs = [
    {
      label: "Tab 1",
      value: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      value: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      value: <RandomComponent />,
    },
  ];

function RandomComponent (){
return <p>I am Random Tab</p>
}

export default function ParentTab(){

function handleOnClick(currentTabIndex) {
    console.log(currentTabIndex);
}

return <Tabs loadContent={tabs} onClick={handleOnClick}></Tabs>

}