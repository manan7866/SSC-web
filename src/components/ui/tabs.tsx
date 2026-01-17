import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue }: { children: React.ReactNode; defaultValue: string }) => {
  return <div>{children}</div>;
};

export const TabsList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex space-x-4 border-b pb-2">{children}</div>;
};

export const TabsTrigger = ({ children, value }: { children: React.ReactNode; value: string }) => {
  return <button className="font-medium text-gray-700">{children}</button>;
};

export const TabsContent = ({ children, value }: { children: React.ReactNode; value: string }) => {
  return <div className="mt-4">{children}</div>;
};
