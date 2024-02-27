import React from 'react';

const ToolsCategory: string[] = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting"
];

const Tools = () => {
    return (
        <div className="overflow-x-scroll">
            <div className="flex p-2 text-xs gap-2 md:gap-6">
                {ToolsCategory.map((tool, index) => (
                    <p className="rounded-md p-2 border border-slate-600 whitespace-nowrap" key={index}>
                        {tool}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Tools;
