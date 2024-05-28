import { useState } from "react";
import "./style.css";

export default function Tabs({ loadContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleSetTab(label) {
    setCurrentTabIndex(label);
  }
  return (
    <div className="wrappper">
      <h1>Heading</h1>
      <div className="taps">
        {loadContent.map((content, index) => (
          <div key={index} className={`tap ${currentTabIndex===index?'active':''}`} onClick={(e) => handleSetTab(index)}>
            <p>{content.label}</p>
          </div>
        ))}
      </div>
      <div className="content" style={{marginTop:'20px'}}>
        {/* important safe check！！！when option1 works then perform option2 */}
        {loadContent[currentTabIndex] && loadContent[currentTabIndex].value}
      </div>
    </div>
  );
}
