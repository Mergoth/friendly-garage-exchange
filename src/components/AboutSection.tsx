import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const AboutSection = () => {
  return (
    <Card className="w-full bg-gray-50">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">
            Hi! I'm Sarah, and I'm decluttering my space with some amazing finds.
            I'm passionate about giving items a second life and hope you'll find
            something you love!
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Collection Information</h3>
            <p className="text-sm text-gray-600">
              📍 Location: Downtown Seattle
              <br />
              ⏰ Available: Weekdays 6-8pm, Weekends 10am-6pm
              <br />
              📱 Contact: Please use the contact form below
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;