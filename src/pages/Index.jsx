import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Typebot.io Clone</h1>
        <p className="text-lg text-gray-600">Create conversational experiences with ease.</p>
      </header>
      <main className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message" />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="mr-2">💬</TooltipTrigger>
                    <TooltipContent>Conversational UI</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span>Conversational UI</span>
              </li>
              <li className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="mr-2">⚙️</TooltipTrigger>
                    <TooltipContent>Easy Integration</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span>Easy Integration</span>
              </li>
              <li className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="mr-2">📊</TooltipTrigger>
                    <TooltipContent>Analytics</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span>Analytics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;