import Image from 'next/image';

const AnalyticsCards = () => {
    return (
        <div className="relative w-full -top-4">
            {/* First Card */}
            <div className="absolute -top-64 z-10 rounded-lg shadow-lg bg-white p-4 w-full border-t border-gray-300">
                <h2 className="text-xs font-medium">Custom Dashboards</h2>
                <p className="text-[10px]">Create and customize your own dashboards</p>
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
            <div className="absolute -top-60 z-20 rounded-lg shadow-lg bg-white p-4 w-full border-t border-gray-300">
                <h2 className="text-xs font-medium">Advanced Metrics</h2>
                <p className="text-[10px]">Gain deeper insights into your data with advanced metrics</p>
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
            <div className="absolute -top-56 z-30 rounded-lg shadow-lg bg-white p-4 w-full border-t border-gray-300">
                <h2 className="text-xs font-medium">Regions Support in Analytics</h2>
                <p className="text-[10px]">You can now filter your analytics by regions</p>
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
