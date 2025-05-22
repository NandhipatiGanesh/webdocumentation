import React from "react";
import { Card, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const MainContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Total Balance Card */}
        <Card className="col-span-1 bg-card-green p-6">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Total Balance</p>
            <div className="flex items-end justify-between">
              <h2 className="text-5xl font-bold">$20,670</h2>
              <span className="text-sm">USD</span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button 
                className="flex-1 bg-white text-black"
                startContent={<Icon icon="lucide:arrow-down" />}
              >
                Deposit
              </Button>
              <Button 
                className="flex-1 bg-black text-white"
                startContent={<Icon icon="lucide:arrow-up-right" />}
              >
                Send
              </Button>
            </div>
          </div>
        </Card>

        {/* Placeholder for other cards */}
        <Card className="col-span-1 lg:col-span-2 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Income</h3>
            <div className="rounded-full bg-light-gray px-3 py-1 text-sm">
              Month
            </div>
          </div>
          <div className="mt-4 h-40 flex items-center justify-center text-default-400">
            Chart placeholder
          </div>
        </Card>
      </div>
    </div>
  );
};