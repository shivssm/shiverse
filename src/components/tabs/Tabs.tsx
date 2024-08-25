import { useState } from "react";
import "./Tabs.css";

type TabsProps = {
    items: Items[];
}

type Items = {
    label: string,
    value: string,
    panel: string
}

const Tabs: React.FC<TabsProps> = ({ items }) => {

    const [value, setValue] = useState(items[0].value)

    return (
        <div className="tabs">
            <div className="tabs-list">
                {items.map(({ label, value: itemValue }) => {
                    const isActiveValue = itemValue === value;

                    return (
                        <button key={itemValue} type="button" className={['tabs-list-item',
                            isActiveValue && 'tabs-list-item--active',].filter(Boolean)
                            .join(' ')}
                            onClick={() => setValue(itemValue)}>
                            {label}
                        </button>
                    )
                })}
            </div>
            <div>
                {items.map(({ panel, value: itemValue }) => (
                    <div key={itemValue} hidden={itemValue !== value}>
                        {panel}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;