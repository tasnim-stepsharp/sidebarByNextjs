import Image from 'next/image';
import React from 'react';

const AnalyticsCards = () => {
    return (
        <div className="relative w-full h-48 mt-2">
            {/* First Card */}
            <div className="absolute z-10 rounded-lg -top-[20px] shadow-sm bg-white dark:bg-Darksidebar-darkgray p-3 w-full border border-sidebar-lightGray3 dark:border-Darksidebar-slate-300">
                <h2 className="text-xs font-medium">Custom Dashboards</h2>
                <p className="text-[10px] text-sidebar-lightGray">Create and customize your own dashboards</p>
                <div className="mt-4 relative h-20 w-full rounded overflow-hidden">
                    <Image
                        src="/images/card1.jpg"
                        alt="Custom Dashboards"
                        objectFit="cover"
                        width={196}
                        height={100}
                    />
                </div>
            </div>

            {/* Second Card */}
            <div className="absolute z-20 rounded-lg -top-[15px] shadow-sm bg-white dark:bg-Darksidebar-darkgray p-3 w-full border border-sidebar-lightGray3 dark:border-Darksidebar-slate-300">
                <h2 className="text-xs font-medium">Advanced Metrics</h2>
                <p className="text-[10px] text-sidebar-lightGray">Gain deeper insights into your data with advanced metrics</p>
                <div className="mt-4 relative h-20 w-full rounded overflow-hidden">
                    <Image
                        src="/images/card1.jpg"
                        alt="Advanced Metrics"
                        objectFit="cover"
                        width={196}
                        height={100}
                    />
                </div>
            </div>

            {/* Third Card */}
            <div className="absolute  z-30 rounded-lg -top-[10px] shadow-sm bg-white dark:bg-Darksidebar-darkgray p-3 w-full border border-sidebar-lightGray3 dark:border-Darksidebar-slate-300">
                <h2 className="text-xs font-medium">Regions Support in Analytics</h2>
                <p className="text-[10px] text-sidebar-lightGray">You can now filter your analytics by regions</p>
                <div className="mt-4 relative h-20 w-full rounded overflow-hidden">
                    <Image
                        src="/images/card1.jpg"
                        alt="Analytics Regions Filter"
                        objectFit="cover"
                        width={196}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCards;
